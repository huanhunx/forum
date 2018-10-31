const crypto = require('crypto')
const secretKey = 'thisIsKaseysForumAesKey19930313!';
module.exports = {
    encrypt(data) {
        var cipher = crypto.createCipher('aes-128-ecb', secretKey);
        return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
    },
    decrypt(data) {
        var cipher = crypto.createDecipher('aes-128-ecb', secretKey);
        return cipher.update(data, 'hex', 'utf8') + cipher.final('utf8');
    }
}