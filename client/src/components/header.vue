<template>
    <div class="header text-center" v-if="headerShow">
        <div class="container headernav">
            <div class="navcontainer">
                <el-menu :router="true" :default-active="activeIndex" :unique-opened="true" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="/home/index">
                        首页
                    </el-menu-item>
                    <el-menu-item index="/forum/article">
                        文章
                    </el-menu-item>
                    <!-- </el-menu>
            </div>
            <div>
                <div class="headerControl">
                    <el-menu :router="true" :default-active="activeIndex" :unique-opened="true" mode="horizontal" @select="handleSelect"> -->
                    <el-menu-item style="float:right" index="/account/login" v-if="!userinfo._id">
                        登陆
                    </el-menu-item>
                    <el-menu-item style="float:right" index="" v-if="userinfo._id">
                        {{welcome}} <span class="text-primary">{{userinfo.nickname}}</span>
                    </el-menu-item>
                    <el-menu-item style="float:right" index="/manage/index" v-if="userinfo.level===100000">
                        管理后台
                    </el-menu-item>
                    <el-menu-item index="" v-show="false"></el-menu-item>
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
    return {
      welcome: '欢迎您'
    }
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
    },
    changeWelcome() {
      const h = new Date().getHours()
      if (4 < h && h <= 11) {
        this.welcome = '早上好'
      } else if (11 < h && h <= 12) {
        this.welcome = '中午好'
      } else if (12 < h && h <= 17) {
        this.welcome = '下午好'
      } else {
        this.welcome = '晚上好'
      }
      this.welcome += ' !'
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
    this.changeWelcome()
    if (!this.userinfo._id) {
      this.checkLogin()
    }
    
  }
}
</script>
<style scoped="" lang="less">
@import '../assets/styles/index.less';
/deep/ .el-menu {
  width: 100%;
}
.header {
  background-color: #fff;
  //   box-shadow: 0px 3px 10px #bbb;
  .baseShadow;
  .headernav {
    display: flex;
    justify-content: space-between;
    .headerControl {
      height: 60px;
      display: flex;
      align-items: center;
    }
    .navcontainer {
      width: 100%;
    }
  }
}
</style>