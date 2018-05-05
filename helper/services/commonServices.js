const crypto = require('crypto');

let generateRandomString = (length) => {
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex')
            .slice(0, length);  
};

let hashWithSha512 = (password, salt) => {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return { salt: salt, passwordHash: value };
};

module.exports = {
    saltHashText: (text) => {
        return hashWithSha512(text, generateRandomString(16));
    }
};



