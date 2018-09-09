<template>
  <div class="light">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#app {
  color: #34495e;
  background-color: #f8f8f8;
}
</style>

<style lang="scss">
$ltgrey: #ddd;
$dkgrey: #ccc;

.light {
  nav {
    border-bottom: 1px solid $dkgrey;
    background: white;
  }

  .icons svg path {
    fill: #42b983;
  }

  .block {
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: #ccc;
    button {
      border: 1px solid #ddd;
      &:focus {
        outline: 1px dashed #ddd;
      }
    }
  }

  .tgl-btn {
    background: white;
    color: #399c70;
    border: 2px solid #42b983;
  }

  .note,
  .findoutmore {
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: #ccc;
  }
}
</style>

