<template>
  <div id="app">
    <!-- <div id="appbody">
    </div> -->
    <div class="wave"></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
#app {
  background-color: #f6f6f6;
  min-height: 100vh;
}

body {
  overflow-y: scroll;
}

.wave {
  position: fixed;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: rgb(118, 218, 255);
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    min-width: 100vw;
    min-height: 100vw;
    background-color: #f6f6f6;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:before {
    bottom: 10vh;
    border-radius: 45%;
    animation-duration: 20s;
  }

  &:after {
    bottom: 8vh;
    opacity: 0.5;
    border-radius: 47%;
    animation-duration: 15s;
  }
}

@keyframes rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
</style>