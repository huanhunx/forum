const Base = require('../../base.js');
const cheerio = require('cheerio')
const articleConfig = {
    prevLength: 200
}

module.exports = class extends Base {
    async publishAction() {
        if (!this.isLogin) {
            this.errCode = 'authFail';
            return;
        }
        const obj = {
            title: this.recv.title,
            content: this.recv.content,
            reluser: this.userinfo._id
        }
        // 生成预览
        let prev = this.recv.content;
        const $ = cheerio.load(`<div class="content">${prev}</div>`);
        prev = prev.replace(/<img(.*?)>/gi, '[图片]');
        prev = $('.content').text();
        let flag = false;
        if (prev.length > articleConfig.prevLength) {
            flag = true
        }
        prev = prev.substr(0, articleConfig.prevLength)
        if (flag) prev += '...'
        obj.prevContent = prev;
        const article = this.mongoose('article');
        try {
            const res = await (new article(obj)).save()
            const today = this.moment().startOf('day').valueOf()
            const staticModel = this.mongoose('static');
            // 增加统计
            const r = await staticModel.update({
                date: today
            }, {
                $inc: {
                    article: 1
                }
            }, {
                upsert: true
            })

            console.log(r)
            this.success({
                id: res.id
            }, "文章发布成功！")
        } catch (error) {
            this.errCode = "publishErr"
        }
    }
    async getlistAction() {
        const article = this.mongoose('article');
        const recv = this.recv;
        const list = await article.find().limit(15).skip(recv.index || 0).sort('-addtime').lean()
        const user = this.mongoose('user');
        // console.log(await user.findOne({
        //     _id: this.objid('5bd7ba0eb512e600f35918d2')
        // }))
        const tasks = [];
        for (let i of list) {
            const objid = this.objid(i.reluser)
            const fn = user.findOne({
                _id: objid
            }).select('nickname')
            tasks.push(fn)
        }
        const res = await Promise.all(tasks);
        list.forEach((item, i) => {
            item.reluserName = res[i].nickname
        })
        const count = await article.count()
        const back = {
            list,
            count
        }
        this.success(back)
    }
    async getAction() {
        const recv = this.recv;
        const id = recv.id;
        const article = await this.mongoose('article').findOne({
            _id: this.objid(id)
        }).select('title reluser addtime tags content likes views')
        article.views += 1;
        article.save();
        const back = article.toObject()
        const reluser = await this.mongoose('user').findOne({
            _id: article.reluser
        }).select('nickname');
        back.reluserName = reluser ? reluser.nickname : '未找到用户'
        this.success(back)
    }
};