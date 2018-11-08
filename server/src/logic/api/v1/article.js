const base = require('../../base.js')
const rules = require('../../../config/rules.js')
const sendback = require('../../../config/sendback')
module.exports = class extends base {
    async publishAction() {
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