# Project Explorer

Create a tree visualization of any project with this CLI tool. When ramping people up on an existing codebase, there's often a lot of state they have to understand about the project- where everything is, where everything starts, exceptional files. With this tool, you can generate a visualization of any project, as well modify certain directories to be open, or have notes that people can read through easily.

A working example of this exists here: \_. I created this for Vue core off of notes taken at a core meeting as Evan You walked us through some of the file structure.

Prerequisites: 
- You need to be running Node 8 or higher
- You have to have Yarn installed.

Usage: 
- Replace nameofyourproject with the name you'd like to give your project
- Path can either be the current directory or you can use `pwd` in another local directory of choice. I recommend this option as you might want these files and this documentation in another folder.

```
$ tree nameofyourproject
> path: ./ (or whatever your pwd output is)
‣ Name of Project: nameofyourproject
‣ Path: ./
```

This will kick off the processes that will build the directory trees, the UI for traversing, and give you a little example to start with too :)

## Open directories

You can specify what directories you would like to be open when a user first visits by adding them to the `opened` array in `base-directory-tree/src/store`.

## Comments 

You can add comments for the different files by adding them to the `comments` object in `base-directory-tree/src/store`. You will specify it using the path as the key and the comment as the value, like this:

```
`READMEexample`: `This is an example of how a note is made! You can write the pathname of any file and the note will appear ☺️. You can delete this now.`
```

Thanks for using this project! I hope it's helpful. If you see ways to improve it, PRs are welcome. 

Twitter: [sarah_edo](https://twitter.com/sarah_edo)
