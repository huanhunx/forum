const io = (io) => {}
const ctrl = require('./controller')

io.init = function(io) {
    io.on('connect', socket => {
        ctrl.connect(io)
        socket.on('sendMsgToAll', d => {
            const recv = JSON.parse(d);
            ctrl.sendMsgToAll(io, recv)
        })
        socket.on('disconnect', d => {
            ctrl.disConnect(io)
        })
    });
    // console.log()
    // setInterval(a=>{
    // 	io.emit('newUser','欢迎新人进入聊天！')
    // },2000)
}
module.exports = io