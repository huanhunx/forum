const config = require('../config/sendback.js')
const authlist = require('../config/authlist.js')
const mongoose = require('mongoose')
module.exports = class extends think.Controller {
    async __before() {
        this.recv = this.isGet ? this.get() : this.post();
        this.objid = mongoose.Types.ObjectId;
        let flag = false,
            level = null;
        for (let item of authlist) {
            flag = item.rule.test(this.ctx.path)
            level = item.level
        }
        console.log(flag)
        // 需要权限验证
        if (flag) {
            const uinfo = await this.session('userinfo');
            console.log(uinfo)
            if (uinfo && uinfo.level >= level) {
                this.userinfo = uinfo;
                this.isLogin = true
            } else {
                this.errCode = 'authFail'
                const info = config.err[this.errCode]
                this.fail(info.no, info.msg)
                return false
            }
        }
    }

    __after() {
        if (this.errCode) {
            const info = config.err[this.errCode]
            this.fail(info.no, info.msg)
        }
    }
};