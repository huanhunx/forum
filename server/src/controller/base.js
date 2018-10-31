const config = require('../config/sendback.js')
const mongoose = require('mongoose')
module.exports = class extends think.Controller {
    async __before() {
        this.recv = this.isGet ? this.get() : this.post();
        this.objid = mongoose.Types.ObjectId
    }

    __after() {
        if (this.errCode) {
            const info = config.err[this.errCode]
            this.fail(info.no, info.msg)
        }
    }
};