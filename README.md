# Project Explorer

Create a tree visualization of any project with this CLI tool. When ramping people up on an existing codebase, there's often a lot of state they have to understand about the project- where everything is, where everything starts, exceptional files. With this tool, you can generate a visualization of any project, as well modify certain directories to be open, or have notes that people can read through easily.

A working example of this exists here: \_. I created this for Vue core off of notes taken at a core meeting with learnings from Evan You.

Prerequisites: 
- You need to be running Node 8 or higher
- You have to have NPM installed.

Usage: 
- Replace nameofyourproject with the name you'd like to give your project
- Path can either be the current directory or you can use `pwd` in another local directory of choice. I recommend this option as you might want these files and this documentation in another folder.

```
$ tree nameofyourproject
> path: ./ (or whatever your pwd output is)
‣ Name of Project: nameofyourproject
‣ Path: ./
✨ The file was saved! ✨
```
