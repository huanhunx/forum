const config = require('../config/sendback.js')
const authlist = require('../config/authlist.js')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
module.exports = class extends think.Controller {
    async __before() {
        this.recv = this.isGet ? this.get() : this.post();
        this.objid = mongoose.Types.ObjectId;
        let flag = false,
            level = null;
        for (let item of authlist) {
            flag = item.rule.test(this.ctx.path)
            if (flag) {
                level = item.level
                break
            }
        }
        // 需要权限验证
        const uinfo = await this.session('userinfo');
        this.userinfo = uinfo;
        if (flag) {
            if (uinfo && uinfo.level >= level) {
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

    mkdirSync(dirpath, mode) {
        if (fs.existsSync(dirpath)) {
            return true;
        } else {
            if (this.mkdirSync(path.dirname(dirpath), mode)) {
                fs.mkdirSync(dirpath, mode);
                return true;
            }
        }
    }
};