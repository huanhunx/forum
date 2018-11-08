const Base = require('../../base.js');

module.exports = class extends Base {
  async articleAction() {
    const Static = this.mongoose('static');
    const start = this.moment().subtract(6, 'days').startOf('day').valueOf()
    let arr = [start];
    for (let i = 1; i < 7; i++) {
      arr.push(start + 86400000 * i)
    }
    const list = await Static.find({
      date: {
        $gte: start
      }
    }).lean()
    const back = arr.map(item => {
      const obj = list.find(e => {
        return e.date === item
      })
      const b = {
        date: this.moment(item).format('MM-DD'),
        article: obj ? obj.article : 0
      }
      return b
    })
    this.success(back)
  }
};