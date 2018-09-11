# 🎋 Project Explorer

> Check out the site: [https://sdras.github.io/project-explorer-site/](https://sdras.github.io/project-explorer-site/)

Create a tree visualization of any project with this CLI tool. When ramping people up on an existing codebase, there's often a lot of state they have to understand about the project- where everything is, where everything starts, exceptional files. With this tool, you can generate a visualization of any project, as well modify certain directories to be open, or have notes that people can read through easily.

## Installation

```
npm i -g project-explorer
```

Here's an example of what we'll be generating:

![demo-image](https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-directory.png)

A [working example of this exists here](https://sdras.github.io/vue-directory-tree/). I created this for Vue core off of notes taken at a core meeting as Evan You walked us through some of the file structure.

### Prerequisites: 
- You need to be running Node 8 or higher
- You have to have Yarn installed.

## Usage:
> _To create the visualization in the same folder as your project_: 
1. Go into the directory of a project you'd like to document, and run the first command, `pexx nameofyourproject`.
2. When prompted for your path, write `.` or `./`
3. Magic happens! ✨ (but it takes a minute ⏰)

---

> _To create the visualization in a separate folder_: 
1. Go into the directory of a project you'd like to document, and run `pwd` in your terminal to get the path
2. Create a new folder to run this CLI in. 
3. Run the first command, `pexx nameofyourproject`.
4. Then paste in the output of pwd as your path when the CLI prompts you for it.
5. Magic happens! ✨ (but it takes a minute ⏰)

---

```
$ pexx nameofyourproject
> path: ./ (or whatever your pwd output is)
‣ Name of Project: nameofyourproject
‣ Path: ./
```

- Replace `nameofyourproject` with the name you'd like to give your project
- Files in `.gitignore` will be ignored in the build. We've also removed `.gitignore`, `.git`, and the `base-directory-tree` that this project will generate.
- Path can either be the current directory or you can use `pwd` in another local directory of choice. I recommend this option as you might want these files and this documentation in another folder.

This will kick off the processes that will build the directory trees, the UI for traversing, and give you a little example to start with too :) It will even kick off the server for you.

## Open directories

You can specify what directories you would like to be open when a user first visits by adding them to the `opened` array in `base-directory-tree/src/store`.

## Comments 

You can add comments for the different files by adding them to the `comments` object in `base-directory-tree/src/store`. You will specify it using the path as the key and the comment as the value, like this:

```
`READMEexample`: `This is an example of how a note is made! You can write the pathname of any file and the note will appear ☺️. You can delete this now.`
```

## Github link

You can point the github logo link to your own repo by updating the `github` string in `base-directory-tree/src/store`.

(Basically all the state you need is probably in the Vuex store. 😉)

## Contributing

Contributions are welcome! 🤘 Please head over to `CONTRIBUTING.md` for more information.

🥂 Thanks for using this project! I hope it's helpful. If you see ways to improve it, PRs are welcome. 

Twitter: [sarah_edo](https://twitter.com/sarah_edo)
