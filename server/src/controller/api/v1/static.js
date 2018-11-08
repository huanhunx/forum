const Base = require('../../base.js');

module.exports = class extends Base {
  async articleAction() {
    const Article = this.mongoose('article');
    const start = this.moment().subtract(7, 'days').startOf('day').valueOf()
    const query = {
      addtime: {
        $gte: start
      }
    }
    const data = await Article.find(query).select('addtime').lean()

  }
};