const os = require('os');
const config = require('./config.json')
const path = require('path');
const fs = require('fs');
const env = process.argv[2] || 'dev'
let ipAddr = '';
let port = '';
let agreement = '';
if (env === 'config' || env === 'c') {
    ipAddr = process.argv[3]
    port = process.argv[4]
    agreement = process.argv[5] || 'http'
} else {
    function getLocalIps(flagIpv6) {
        var ifaces = os.networkInterfaces();

        var ips = [];
        var func = function (details) {
            if (!flagIpv6 && details.family === 'IPv6') {
                return;
            }
            ips.push(details.address);
        };
        for (var dev in ifaces) {
            ifaces[dev].forEach(func);
        }
        return ips;
    };

    // console.log(getLocalIps())
    if (config[env].host) {
        ipAddr = config[env].host
    } else {
        ipAddr = getLocalIps().find(item => {
            return item.indexOf('192') != -1
        })
    }
    port = config[env].port;
    agreement = config[env].agreement
}
console.log(`获取到IP地址为 ${ipAddr} 将使用 ${ipAddr}:${port} 作为请求url\n如果不正确请在 src/api/config.js 手动添加并运行npm run dev`)
console.log('...')
const baseurl = `${agreement}://${ipAddr}:${port}`
console.log(`使用 ${baseurl} 作为api接口`)
const content = `export const baseUrl = "${baseurl}"`
fs.writeFileSync(path.resolve(__dirname, "../src/api/config.js"), content);