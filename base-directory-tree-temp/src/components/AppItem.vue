<template>
  <div class="block">

    <div @click="toggleOpened(unit.name)">
        {{ unit.name }}
      <button v-if="isFolder">{{ arrOpen ? '-' : '+' }}</button>
      <button 
        v-if="comments[unit.path]"  
        @mouseenter="noteShowing = true" 
        @mouseleave="noteShowing = false"
        class="info"
      >
        info
      </button>
    </div>
    
    <app-arrow v-if="arrOpen !== undefined" />
    <div v-if="noteShowing">
      <app-note :comments="comments" :path="unit.path"/>
    </div>

    <section v-show="arrOpen">
      <app-item
        class="item"
        v-for="unit in unit.children"
        :key="unit.name"
        :unit="unit"
      />
    </section>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppArrow from './AppArrow.vue'
import AppNote from './AppNote.vue'

export default {
  name: 'app-item',
  components: {
    AppArrow,
    AppNote
  },
  props: {
    unit: Object
  },
  data() {
    return {
      open: false,
      noteShowing: false
    }
  },
  methods: {
    toggleOpened(name) {
      this.$store.commit('toggleOpened', name)
    }
  },
  computed: {
    ...mapState(['opened', 'comments']),
    arrOpen() {
      return this.opened.find(el => el === this.unit.name)
    },
    isFolder() {
      return this.unit.children && this.unit.children.length
    }
  }
}
</script>

<style lang="scss">
section {
  transform: translateX(70px);
}

.block {
  font-size: 14px;
  position: relative;
  display: block;
  padding: 4px 40px 4px 10px;
  margin: 5px 0;
  width: 75px;
  transition: 0.5s all ease;
  font-family: 'Space Mono', monospace;
  text-align: left;
  border-radius: 4px;
  button {
    cursor: pointer;
    border-radius: 2px;
  }
  .block {
    width: 200px;
    .block .block {
      width: 300px;
      .block .block {
        width: 235px;
      }
    }
  }
}

.block button.info,
.block .block button.info {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  position: absolute;
  right: 8px;
  background: #42b983;
  padding: 3px 8px;
  font-size: 12px;
  color: white;
  margin-top: -1px;
  letter-spacing: 0.05em;
  cursor: pointer;
  border: none;
}

@media only screen and (max-width: 600px) {
  section {
    transform: translateX(20px) !important;
  }

  .block,
  .block .block .block .block {
    font-size: 12px;
    width: 150px !important;
  }

  .block button.info,
  .block .block button.info {
    font-size: 9px;
  }
}
</style>