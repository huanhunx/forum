<template>
    <el-aside class='aside' width="200px" v-if="sidebarShow">
        <el-menu default-active="1" class="menu" :router="true">
            <el-menu-item index="1" route='/manage/index'>
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>文章</span>
                </template>
                <el-menu-item index="2-1" route="/manage/article/index">文章管理</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('sidebar', {
      sidebarShow: 'show'
    })
  }
}
</script>
<style scoped>
.menu {
  height: calc(100vh - 60px);
}
.aside {
  margin-top: 60px;
}
</style>