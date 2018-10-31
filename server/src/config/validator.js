module.exports = {
    messages: {
        required: '{name}不能为空！',
        length: function({ rule, validName }) {
            const args = rule[validName]
            return `${rule.aliasName}长度应该在${args.min}-${args.max}之间`
        },
        loginAuth:'您需要先登陆才能进行这个操作'
    }
}