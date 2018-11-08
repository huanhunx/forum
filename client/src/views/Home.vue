<template>
    <el-container>
        <sidebar></sidebar>
        <el-container>
            <el-header class="headernav" style="margin-bottom:10px">
                <navheader></navheader>
            </el-header>
            <el-main>
                <router-view></router-view>
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
</style>
