const Base = require('../../base.js')

module.exports = class extends Base {
  async loginAction() {
    // let user = this.userinfo
    // if (user) {
    //   this.success(user, '您已登陆')
    //   return
    // }
    const recv = this.recv
    const query = {
      username: recv.username,
      password: this.aes.encrypt(recv.password)
    }
    // 查询用户
    let userinfo = await this.mongoose('user')
      .findOne(query)
      .select('nickname level lastLogin')
    // 更新最后登陆时间
    if (!userinfo) {
      this.fail(600001, '用户名或密码错误')
      return false
    }
    userinfo.lastLogin = new Date().getTime()
    userinfo.save()
    userinfo = userinfo.toObject()
    this.session('userinfo', userinfo)
    this.success(userinfo, '登陆成功')
  }

  async ustatusAction() {
    let user = this.userinfo
    this.success(user || {})
  }
}