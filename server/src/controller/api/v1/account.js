const Base = require('../../base.js');

module.exports = class extends Base {

    async loginAction() {
        let user = this.userinfo
        if (user) {
            this.success(user, '您已登陆');
            return;
        }
        const recv = this.recv;
        const query = {
            username: recv.username,
            password: this.aes.encrypt(recv.password)
        }
        const userinfo = await this.model('user').findOne(query).select('nickname')
        if (!userinfo) {
            this.fail(600001, '用户名或密码错误')
            return;
        }
        this.session('userinfo',userinfo)
        this.success(userinfo, '登陆成功');
    }
    async registerAction() {
        const obj = {
            username: 'huanhunx',
            password: this.aes.encrypt('yitian'),
            nickname: '叉大哥',
        }
        let user = this.model('user');
        user = new user(obj)
        await user.save();
        this.success('OK', '用户创建成功')
    }
};