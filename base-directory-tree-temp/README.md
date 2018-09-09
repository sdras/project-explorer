# Vue Core Directory Visualization

Shows the whole vue repo directory structure, with only the relevant pieces shown initially. Any files that we have more info on have a note (exposed on hover).

First, build the directory structure as an object with node: https://gist.github.com/sdras/f5665c5bcd98b48b4a3a9aed1312fd37

Then the object is brought into the vuex store. The store also houses the notes for files we have.

```
yarn
yarn serve
```
