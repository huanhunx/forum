const {
  SchameTypes
} = require('mongoose');

module.exports = class extends think.Mongoose {
  get schema() {
    return {
      reluser: {
        type: String,
        required: true,
        index: 1
      },
      title: {
        type: String,
        required: true,
        index: 1
      },
      content: {
        type: String,
        default: ''
      },
      addtime: {
        type: Number,
        default: Date.now,
        index: -1
      },
      tag: {
        type: Array,
        default: [],
        index: 1
      },
      prevContent: {
        type: String,
        default: ''
      },
      isActive: {
        type: Boolean,
        default: true,
        index: 1
      },
      likes: {
        type: Number,
        default: 0,
        index: -1
      },
      views: {
        type: Number,
        default: 0,
        index: -1
      }
    }
  }
}