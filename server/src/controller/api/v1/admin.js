const Base = require('../../base.js');

module.exports = class extends Base {
  async getArticleListAction() {
    const recv = this.recv
    const query = {};
    const AM = this.mongoose('article');
    const UM = this.mongoose('user');
    const index = recv.index * 1;
    const length = recv.pageLength * 1
    const list = await AM.where(query).select('tag prevContent isActive likes views title reluser addtime').skip(index).limit(length).sort('-addtime').find().lean()
    const count = await AM.where(query).countDocuments()
    const task = list.map(item => {
      return UM.where({
        _id: item.reluser
      }).select('nickname').findOne()
    })
    const res = await Promise.all(task)
    res.forEach((item, i) => {
      list[i].reluserName = item.nickname
    })
    const obj = {
      list,
      count
    }
    this.success(obj)
  }
};