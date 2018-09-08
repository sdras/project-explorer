#!/usr/bin/env node
const program = require('commander'),
  co = require('co'),
  prompt = require('co-prompt'),
  chalk = require('chalk'),
  dirTree = require('directory-tree'),
  shell = require('shelljs'),
  fs = require('fs')

const writeFile = (tree, cb) => {
  const fullTree = JSON.stringify(tree, null, 2)

  fs.writeFile('tree.js', fullTree, 'utf8', err => {
    if (err) throw err
    console.log(chalk.yellow('✨ The file was saved! ✨'))
    cb()
  })
}

program
  .arguments('<name>')
  .option('-p, --path <path>', 'The directory used for the project explorer')
  .option('-wf, --writefile', 'Writetofile', writeFile)
  .action(name => {
    co(function*() {
      const path = yield prompt('path: ')
      console.log(chalk.cyan('‣ Name of Project: ') + name)
      console.log(chalk.cyan('‣ Path: ') + path)

      const tree = dirTree(path)
      if (tree === null) {
        console.log(
          chalk.red(
            `Warning! ${path} is not a directory usable by the project explorer. Perhaps try using pwd to generate the path for you.`
          )
        )
        process.exit(1)
      }
      writeFile(tree, err => {
        if (err) {
          console.log(chalk.red(err))
          process.exit(1)
        }
      })

      shell.cd('base-directory-tree')
    })
  })
  .parse(process.argv)
