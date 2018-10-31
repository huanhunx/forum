const base = require('../../base.js')
const rules = require('../../../config/rules.js')
const sendback = require('../../../config/sendback')
module.exports = class extends base {
    async publishAction() {
        const uinfo = await this.session('userinfo');
        if (!uinfo) {
            const info = sendback.err.authFail
            this.fail(info.no, info.msg)
            return false
        }
        if (uinfo) {
            this.isLogin = true
            this.userinfo = uinfo
        }
        this.allowMethods = "post";
        this.rules = {
            title: rules.title,
            content: rules.content,
        }
    }
    async getlistAction() {
        this.allowMethods = "get"
    }
    async get() {
        this.allowMethods = 'get'
    }
};