module.exports = {
    loginAuth:{
        required:true,
        aliasName:"loginAuth"
    },
    username: {
        string: true,
        required: true,
        length: {
            min: 6,
            max: 18
        },
        aliasName: '用户名'
    },
    password: {
        string: true,
        required: true,
        length: {
            min: 6,
            max: 18
        },
        aliasName: '密码'
    },
    title: {
        string: true,
        required: true,
        length: {
            min: 2,
            max: 50
        },
        aliasName: '文章标题'
    },
    content: {
        string: true,
        required: true,
        length: {
            min: 2
        },
        aliasName: '文章内容'
    }
}