import Vue from 'vue'
import Vuex from 'vuex'
import { name } from './name.js'
import { tree } from './tree.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dark: false,
    //this lets us know which files to highlight, to open on first visit
    opened: [name],
    //this will show any comments that are relevant to a particular file
    comments: {
      READMEexample: `This is an example of how a note is made! You can write the pathname of any file and the note will appear ☺️. You can delete this now.`
    },
    //the whole directory structure
    tree,
    name
  },
  mutations: {
    toggleOpened(state, name) {
      if (state.opened.includes(name)) {
        state.opened = state.opened.filter(e => e !== name)
      } else {
        state.opened.push(name)
      }
    },
    toggleDark(state) {
      state.dark = !state.dark
    }
  }
})
