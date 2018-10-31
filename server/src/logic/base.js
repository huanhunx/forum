const config = require('../config/sendback.js')
module.exports = class extends think.Logic {
    __before() {
        this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
        this.header("Access-Control-Allow-Headers", "*");
        this.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
        this.header('Access-Control-Allow-Credentials', true);
    }

    // __after() {
    //     if (this.errCode) {
    //         const info = config.err[this.errCode]
    //         this.fail(info.no, info.msg)
    //         return false
    //     }
    // }
};