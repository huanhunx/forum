<template>
    <el-container>
        <sidebar></sidebar>
        <el-container>
            <el-header class="headernav" style="margin-bottom:10px">
                <navheader></navheader>
            </el-header>
            <el-main class="main-content">
                <transition name="fade">
                    <router-view class="child-view"></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
// @ is an alias to /src
import sidebar from '@/components/sidebar'
import navheader from '@/components/header'

export default {
  name: 'home',
  components: {
    sidebar,
    navheader
  },
  methods: {
    validUserinfo() {}
  },
  mounted() {
    this.validUserinfo()
  }
}
</script>
<style lang="less" scoped>
.child-view {
  transition: all 0.3s;
  overflow: auto
}
.fade-leave,
.fade-leave-active {

  display: none
}

.fade-enter{
  opacity: 0;
}

.headernav{
    position: fixed;
    z-index: 111;
    width: 100%;
}

.main-content{
    margin-top: 60px;
}
</style>
