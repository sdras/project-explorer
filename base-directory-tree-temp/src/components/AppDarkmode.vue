<template>
  <div class="dark">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#app {
  background: #000;
  color: white;
}
</style>

<style lang="scss">
$black: #000;
$dkblack: #121212;
$mdblack: #444;
$ltblack: #555;
$grey: #888;

.dark {
  nav {
    border-bottom: 1px solid $ltblack;
    background: $black;
    color: white;
  }

  .icons svg path {
    fill: $grey;
  }

  button {
    color: white;
  }

  .arrow {
    opacity: 0.6;
  }

  .block {
    background-color: $black;
    border: 1px solid $mdblack;
    border-bottom-color: $ltblack;
    button {
      background: $dkblack;
      border: 1px solid $ltblack;
      &:focus {
        outline: 1px dashed $ltblack;
      }
    }
  }

  .tgl-btn {
    background: $dkblack;
    color: white;
    border: 2px solid $grey;
  }

  .note,
  .findoutmore {
    background-color: $dkblack;
    border: 1px solid $mdblack;
    border-bottom-color: $ltblack;
  }
}
</style>
