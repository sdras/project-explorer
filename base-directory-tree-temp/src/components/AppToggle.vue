<template>
  <div @click="toggleMode">
    <transition name="flip" mode="out-in">
      <span class="tgl-btn" v-if="!dark">Light</span>
      <span class="tgl-btn" v-else>Dark</span>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMode() {
      this.$store.commit('toggleDark')
    }
  },
  computed: {
    dark() {
      return this.$store.state.dark
    }
  }
}
</script>

<style lang="scss" scoped>
.tgl-btn {
  padding: 2px;
  perspective: 100px;
  display: inline-block;
  width: 60px;
  text-align: center;
  line-height: 1.75em;
  position: absolute;
  top: -1px;
  right: 0;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}
</style>