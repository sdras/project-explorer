#!/usr/bin/env node
const program = require('commander'),
  co = require('co'),
  prompt = require('co-prompt'),
  chalk = require('chalk'),
  dirTree = require('directory-tree'),
  fs = require('fs')

const writeFile = tree => {
  console.log('hi there')
  fs.writeFile('tree.js', tree, 'utf8', err => {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })
}

program
  .arguments('<name>')
  .option('-p, --path <path>', 'The directory used for the project explorer')
  .option('-wf, --writefile', 'Writetofile', writeFile)
  .action(name => {
    co(function*() {
      const path = yield prompt('path: ')
      console.log(chalk.bold.cyan('Name of Project: ') + name)
      console.log(chalk.bold.cyan('Path: ') + path)

      const tree = dirTree(path)
      writeFile(tree)

      //process.exit(0)
    })
  })
  .parse(process.argv)
