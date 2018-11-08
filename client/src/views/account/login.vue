<template>
    <div class="login">
        <el-row>
            <el-col :span="8" :offset="8">
                <el-form ref="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="loginData.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="loginData.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="login" type="primary">登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'login',
    components: {},
    data() {
        return {
            loginData: {
                // username: 'huanhunx',
                // password: 'yitian'
                username: '',
                password: ''
            }
        }
    },
    mounted() {
        this.displaySidebar(false)
    },
    methods: {
        ...mapActions('sidebar', {
            displaySidebar: 'display'
        }),
        ...mapActions('user', {
            updateUser: 'update'
        }),
        async login() {
            const r = await this.$api.login(this.loginData)
            const data = r.data;
            const user = data.data;
            this.updateUser(user);
            if (!data.errno){
                this.$router.push('/home/index')
            }
        }
    }
};
</script>
<style scoped>
.login {
    padding-top: 50px
}
</style>