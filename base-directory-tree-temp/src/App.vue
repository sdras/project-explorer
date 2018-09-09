<template>
  <component :is="selected" id="app">
    <app-nav />
    <main>
      <app-item class="item" :unit="tree" />
    </main>
  </component>
</template>

<script>
import AppNav from './components/AppNav.vue'
import AppItem from './components/AppItem.vue'
import AppDarkmode from './components/AppDarkmode.vue'
import AppLightmode from './components/AppLightmode.vue'

export default {
  components: {
    AppNav,
    AppItem,
    dark: AppDarkmode,
    light: AppLightmode
  },
  computed: {
    tree() {
      return this.$store.state.tree
    },
    selected() {
      const dark = this.$store.state.dark
      return dark ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Space+Mono|Source+Sans+Pro:400,600');

body {
  display: flex;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100vw;
  min-height: 100vh;
}

#app {
  width: 100vw;
  min-height: 100vh;
}

main {
  width: 900px;
  margin: 0 auto;
}

h1,
h2,
h3 {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  main {
    width: 100vw;
  }
}
</style>

<style scoped>
p {
  text-align: center;
}
</style>

