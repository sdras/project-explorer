#!/usr/bin/env node
const program = require('commander'),
  co = require('co'),
  prompt = require('co-prompt'),
  chalk = require('chalk'),
  dirTree = require('directory-tree'),
  shell = require('shelljs'),
  targz = require('targz'),
  isGlob = require('is-glob'),
  globToRegExp = require('glob-to-regexp'),
  path = require('path'),
  fs = require('fs')

const writeFile = (tree, name, cb) => {
  // we want to name the initial directory properly and later we'll make sure it's open
  tree.name = name
  // we add this note so that people can see how to add comments.
  // feel free to delete this part if you want to eliminate the example
  tree.children.push({
    path: 'READMEexample',
    name: 'READMEexample',
    type: 'file'
  })
  const fullTree = `const tree = ${JSON.stringify(tree, null, 2)}
  export { tree }`

  const nameDir = `const name = '${name}'
  export { name }`

  fs.writeFile('./base-directory-tree/src/tree.js', fullTree, 'utf8', err => {
    if (err) throw err
    fs.writeFile('./base-directory-tree/src/name.js', nameDir, 'utf8', err => {
      if (err) throw err
      console.log(
        chalk.yellow(`✨ Your files were saved, now let's build it out! ✨`)
      )
      console.log('Hang tight, this might take a minute.')
      cb()
    })
  })
}

const gitignoreRegex = (root) => {
  let fileContents
  try {
    fileContents = fs.readFileSync(path.join(root, '.gitignore'), 'utf8')
  } catch (err) { return [] }
  return fileContents.split(/\r?\n/)
    .filter(line => line.trim() !== '' && line.trim().charAt(0) !== '#')
    .map(line => {
      const pattern = line.trim()
      return isGlob(pattern) ? globToRegExp(pattern) : RegExp(pattern.replace(/\/$/, ''))
    })
}

program
  .arguments('<name>')
  .option('-p, --path <path>', 'The directory used for the project explorer')
  .option('-wf, --writefile', 'Writetofile', writeFile)
  .action(name => {
    co(function*() {
      const pathDir = yield prompt('path: ')
      console.log(chalk.cyan('‣ Name of Project: ') + name)
      console.log(chalk.cyan('‣ Path: ') + pathDir)

      //take the gitignored regex array to exclude and add a couple more files, like the base-directory-tree we created.
      const gitignoredArr = gitignoreRegex(pathDir)
      gitignoredArr.push(/\.gitignore/, /base-directory-tree/, /\.git/)

      const tree = dirTree(pathDir, {
        exclude: gitignoredArr
      })

      if (tree === null) {
        console.log(
          chalk.red(
            `Warning! ${pathDir} is not a directory usable by the project explorer. Perhaps try using pwd to generate the path for you.`
          )
        )
        process.exit(1)
      }

      targz.decompress(
        {
          src: path.join(__dirname, 'basedirectory.tar.gz'),
          dest: '.'
        },
        function(err) {
          if (err) {
            console.log(err)
          } else {
            // write the files and call the shell commands to kick the project off
            writeFile(tree, name, err => {
              if (err) {
                console.log(chalk.red(err))
                process.exit(1)
              }
              shell.cd('base-directory-tree')
              shell.exec('yarn')
              console.log(
                chalk.cyan(
                  `🎸 Done! Built with success! Now let's get you a server.`
                )
              )
              shell.exec('yarn serve')
            })
          }
        }
      )
    })
  })
  .parse(process.argv)
