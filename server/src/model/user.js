const {
    SchameTypes
} = require('mongoose');

module.exports = class extends think.Mongoose {
    get schema() {
        return {
            username: {
                type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            nickname: {
                type: String,
                required: true
            },
            addtime: {
                type: Number,
                default: Date.now
            },
            level: {
                type: Number,
                default: 0
            }
        }
    }
}