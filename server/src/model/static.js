const {
    SchameTypes
} = require('mongoose');

module.exports = class extends think.Mongoose {
    get schema() {
        return {
            date: {
                type: Number,
                required: true
            },
            article: {
                type: Number,
                default: 0
            },
            login: {
                type: Number,
                default: 0
            }
        }
    }
}