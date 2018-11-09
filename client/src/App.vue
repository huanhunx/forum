<template>
  <div id="app" ref="app">
    <!-- <div id="appbody">
    </div> -->
    <div class="wave"></div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('browser', ['width'])
  },
  methods: {
    ...mapActions('browser', ['updateWidth'])
  },
  mounted() {
    this.updateWidth(window.innerWidth)
    window.onresize = ()=> {
      this.updateWidth(window.innerWidth)
    }
  }
}
</script>
<style lang="less">
#app {
  background-color: #f6f6f6;
  min-height: 100vh;
}

body {
  overflow-y: scroll;
}
</style>