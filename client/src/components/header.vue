<template>
    <div class="header text-center" v-if="headerShow">
        <div class="container headernav">
            <div>
                <el-menu :router="true" :default-active="activeIndex" :unique-opened="true" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="/home/index">
                        首页
                    </el-menu-item>
                    <el-menu-item index="/forum/article">
                        文章
                    </el-menu-item>
                    <el-menu-item index="" v-show="false"></el-menu-item>
                </el-menu>
            </div>
            <div>
                <div class="headerControl">
                    <el-menu :router="true" :default-active="activeIndex" :unique-opened="true" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="/manage/index" v-if="userinfo.level===100000">
                            管理后台
                        </el-menu-item>
                        <el-menu-item index="/account/login" v-if="!userinfo._id">
                            登陆
                        </el-menu-item>
                        <el-menu-item index="" v-if="userinfo._id">
                            欢迎您 <span class="text-primary">{{userinfo.nickname}}</span> !
                        </el-menu-item>
                        <!-- <el-menu-item index="" v-show="false"></el-menu-item> -->
                    </el-menu>
                </div>
                <!-- <el-menu-item v-if="!userinfo._id" index="/account/login">登陆</el-menu-item>
                    <el-menu-item v-else index="/account/user">{{userinfo.nickname}}</el-menu-item> -->
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions('user', {
      updateUser: 'update'
    }),
    handleSelect() {},
    async checkLogin() {
      const res = await this.$api.ustatus()
      let data = {}
      if (res._succ) {
        data = res.data.data
      }
      this.updateUser(data)
      console.log(this.userinfo)
    }
  },
  computed: {
    ...mapGetters('user', {
      userinfo: 'info'
    }),
    ...mapGetters('headernav', {
      activeIndex: 'index',
      headerShow: 'show'
    })
  },
  mounted() {
    if (!this.userinfo._id) {
      this.checkLogin()
    }
  }
}
</script>
<style scoped="" lang="less">
@import '../assets/styles/index.less';
.header {
  background-color: #fff;
  .baseShadow;
  .headernav {
    display: flex;
    justify-content: space-between;
    .headerControl {
      height: 60px;
      display: flex;
      align-items: center;
    }
  }
}
</style>