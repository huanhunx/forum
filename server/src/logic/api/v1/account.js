const base = require('../../base.js')
const rule = require('../../../config/rules.js')
module.exports = class extends base {
    loginAction() {
        this.allowMethods = 'post'
        this.rules = {
            username: rule.username,
            password: rule.password
        }
    }
};