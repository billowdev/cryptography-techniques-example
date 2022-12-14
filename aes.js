const CryptoJS = require('crypto-js');
exports.encryptAES = (content, password) => CryptoJS.AES.encrypt(JSON.stringify({ content }), password).toString()
exports.decryptAES = (crypted, password) => JSON.parse(CryptoJS.AES.decrypt(crypted, password).toString(CryptoJS.enc.Utf8)).content
