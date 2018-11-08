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
                        <el-menu-item index="/account/login">
                            登陆
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    handleSelect() {},
    checkLogin(){
        
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
  mounted(){
      if(!this.userinfo._id){
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