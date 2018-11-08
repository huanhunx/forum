const base = require('../../base.js')

module.exports = class extends base {
  articleAction() {
    this.allowMethods = "get";
  }
};