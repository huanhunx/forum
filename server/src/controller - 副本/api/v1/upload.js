const Base = require('../../base.js');
const fs = require('fs')

module.exports = class extends Base {
  imgAction() {
    const file = this.file('img');
    const arr = file.path.split('/')
    const name = arr[(arr.length - 1)]
    const uid = this.userinfo._id
    const pth = `${think.ROOT_PATH}/www/static/upload/${uid}/img/`
    if (!fs.existsSync(pth)) {
      super.mkdirSync(pth)
    }
    const newPath = pth + name
    fs.writeFileSync(newPath,fs.readFileSync(file.path))
    // fs.renameSync(file.path, newPath)
    const backpath = `/static/upload/${uid}/img/${name}`
    this.success(backpath)
  }
};