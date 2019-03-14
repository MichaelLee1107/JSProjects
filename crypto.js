/*
 * Created Date: Monday, August 6th 2018, 5:13:41 pm
 * Author: liwenbin
 * 
 * Copyright (c) 2018 HUAZHI IMT LTD.
 */


let crypto = require('crypto');

/**
 * AES128位编码函数
 * 编码模式：aes-128-ecb
 * IN:  key：密码／ data: 数据
 * OUT：加密后的数据(hex)) 
 * ERROR: 返回错误信息
 */
exports.ENCODE_AES128 = function (key, data) {
    try {
        let clearEncoding = 'utf8';
        let cipherEncoding = 'base64';
        let cipher = crypto.createCipher('aes-128-ecb', key);
        let cipherChunks = [];
        cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
        cipherChunks.push(cipher.final(cipherEncoding));
        return cipherChunks.join('');
    } catch (error) {
        return error;
    }
}

/**
 * AES128位解码函数
 * 编码模式：aes-128-ecb
 * IN:  key：密码／ data: 数据(解密后的数据)
 * OUT：加密后的解码(hex)) 
 * ERROR: 返回错误信息
 */
exports.DECODE_AES128 = function (key, data) {
    try {
        let cipherEncoding = 'base64';
        let clearEncoding = 'utf8';
        let decipher = crypto.createDecipher('aes-128-ecb', key);
        let plainChunks = [];
        plainChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
        plainChunks.push(decipher.final(clearEncoding));
        return plainChunks.join('');
    } catch (error) {
        return error;
    }
};


