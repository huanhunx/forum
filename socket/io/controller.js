const ctrl = () => {}
ctrl.users = 0;
ctrl.connect = (io) => {
    ctrl.sysInfo(io, '欢迎新人进入聊天！')
    ctrl.addUser(io,1)
}

ctrl.disConnect = (io) => {
    ctrl.sysInfo(io, '有人走了')
    ctrl.addUser(io,-1)
}

ctrl.addUser = (io, count) => {
    ctrl.users += count;
    ctrl.updateUser(io)
}

ctrl.sysInfo = (io, content) => {
    io.emit('sysInfo', content)
}

ctrl.sendMsgToAll = (io, content) => {
    io.emit('sendMsgToAll', content)
}

ctrl.updateUser = (io) => {
    io.emit('updateUser', ctrl.users)
}
module.exports = ctrl