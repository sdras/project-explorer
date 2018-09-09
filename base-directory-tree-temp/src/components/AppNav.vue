<template>
  <nav>
    <div class="navcontain">
      <span>{{ name }} Directory Structure</span>

      <div class="icons">
        <a href="https://github.com/sdras/vue-directory-tree/" target="_blank">
          <svg class="github" role="presentation" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" aria-labelledby="github">
            <title id="github">github</title>
            <path d="M22.5 8.5c0-1.5-0.5-2.8-1.4-4 0.3-1.3 0.2-2.7-0.3-3.9-0.1-0.3-0.3-0.5-0.6-0.6-0.4-0.1-1.7-0.3-4.4 1.4-2.2-0.5-4.5-0.5-6.6 0-2.7-1.7-4-1.5-4.4-1.4-0.3 0.1-0.5 0.3-0.6 0.6-0.6 1.3-0.7 2.6-0.3 3.9-0.9 1.2-1.4 2.6-1.4 4 0 5.4 3 7.1 5.8 7.7-0.2 0.7-0.3 1.3-0.3 1.9v0.1c-2.1 0.4-2.8-0.4-3.6-1.5-0.5-0.7-1.1-1.5-2.2-1.7-0.5-0.1-1.1 0.2-1.2 0.7s0.2 1.1 0.7 1.2c0.3 0.1 0.7 0.5 1.1 1 0.9 1.2 2.2 2.8 5.2 2.4v1.7c0 0.6 0.4 1 1 1s1-0.4 1-1v-2.9c0 0 0-0.1 0-0.1v-0.9c0-0.7 0.2-1.3 0.7-1.8 0.3-0.3 0.4-0.7 0.2-1-0.1-0.4-0.4-0.6-0.8-0.7-2.9-0.4-5.6-1.3-5.6-6 0-1.2 0.4-2.2 1.2-3.1 0.3-0.3 0.3-0.7 0.2-1-0.3-0.9-0.3-1.7-0.1-2.5 0.5 0.1 1.4 0.4 2.6 1.3 0.3 0.2 0.6 0.2 0.9 0.1 2.1-0.6 4.4-0.6 6.5 0 0.3 0.1 0.6 0 0.8-0.1 1.3-0.9 2.2-1.2 2.6-1.3 0.2 0.8 0.2 1.6-0.1 2.4-0.1 0.4-0.1 0.8 0.2 1 0.8 0.8 1.2 1.9 1.2 3.1 0 4.7-2.7 5.7-5.6 6-0.4 0-0.7 0.3-0.8 0.7s0 0.8 0.2 1c0.5 0.5 0.7 1.2 0.7 1.9v3.9c0 0.6 0.4 1 1 1s1-0.4 1-1v-3.8c0.1-0.7 0-1.3-0.3-1.9 2.4-0.5 5.8-2.1 5.8-7.8z"></path>
          </svg>
        </a>

        <app-moreinfo />
        <app-toggle />
      </div>
    </div>
  </nav>
</template>

<script>
import AppMoreinfo from './../components/AppMoreinfo.vue'
import AppToggle from './../components/AppToggle.vue'

export default {
  components: {
    AppMoreinfo,
    AppToggle
  },
  computed: {
    name() {
      return this.$store.state.name
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  margin: 0 0 20px;
  height: 70px;
}

.navcontain {
  width: 900px;
  margin: 0 auto;
  padding: 16px;
  span {
    display: inline-block;
    vertical-align: top;
    margin: 10px 0;
    font-weight: bold;
    font-size: 18px;
    text-transform: capitalize;
  }
}

.icons {
  display: flex;
  width: 180px;
  justify-content: space-around;
  padding-top: 4px;
  float: right;
  margin-top: 5px;
  position: relative;
}

@media only screen and (max-width: 600px) {
  .navcontain {
    width: 90vw !important;
    span {
      font-size: 15px !important;
    }
  }

  .icons {
    width: 100px !important;
    justify-content: space-between;
  }
}
</style>