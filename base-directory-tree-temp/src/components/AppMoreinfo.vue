<template>
  <div class="more-info-contain">
    <svg 
      @mouseenter="show = !show" 
      @mouseleave="show = !show" 
      class="more-info"
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      aria-labelledby="info"
    >
      <title id="info">Info</title>
      <path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z"></path>
      <path d="M12 11c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1s1-0.4 1-1v-4c0-0.6-0.4-1-1-1z"></path>
      <path d="M11.3 7.3c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.2-0.2 0.3-0.4 0.3-0.7s-0.1-0.5-0.3-0.7c-0.4-0.4-1-0.4-1.4 0z"></path>
    </svg>
    <transition name="appear">
      <div class="findoutmore" v-if="show">
        <h2>What is this?</h2>
        <p>Often when we're excited about contributing to a project, it takes a little while to understand the codebase even before we get started. It's estimated that developers spend 70% of their time reading code and only 30% writing. This project documents how Vue.js is set up with special notes taken from a Vue core meeting with Evan You to guide people through the directory structure and give context to how and why things are set up the way that they are so that they can get set up to contribute as soon as possible.</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.findoutmore {
  position: absolute;
  top: 31px;
  line-height: 1.3;
  width: 300px;
  z-index: 4000;
  display: block;
  padding: 20px 40px 30px;
  transition: 0.5s all ease;
  text-align: left;
  border-radius: 4px;
  right: -24px;
}

@media (max-width: 800px) {
  .findoutmore {
    display: none;
  }
}

.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.25s ease;
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}

.more-info-contain {
  fill: #42b983;
  position: absolute;
  margin: -2px 0 0 -16px;
}

.more-info {
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .more-info-contain {
    display: none !important;
  }
}
</style>