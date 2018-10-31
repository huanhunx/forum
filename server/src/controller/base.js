const config = require('../config/sendback.js')
const mongoose = require('mongoose')
module.exports = class extends think.Controller {
    async __before() {
        const uinfo = await this.session('userinfo');
        if (uinfo) {
            this.isLogin = true
            this.userinfo = uinfo
        }
        this.recv = this.isGet ? this.get() : this.post();
        this.objid = mongoose.Types.ObjectId
    }

    __after() {
        if (this.errCode) {
            const info = config.err[this.errCode]
            console.log(info)
            this.fail(info.no, info.msg)
        }
    }
};