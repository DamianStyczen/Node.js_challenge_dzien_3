const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
//Twój kod
const crypto = require('crypto');

const passwords = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];

function findPassword(hash, passwords, hashFuncton){
    let result;
    passwords.forEach(password => {
    let newHash = crypto.createHmac(hashFuncton, password).digest('hex');
    if(hash === newHash){
        result = password;
        return;
    }
    })
    if(result){
        return result;
    }
    else{
        return "ERROR - Password not found.";
    }
    
}

console.log("The password is:", findPassword(MY_PWD_HASH, passwords, 'sha256'));
console.log("The password is:", findPassword(MY_PWD_HASH, passwords, 'sha512'));
console.log("The password is:", findPassword(MY_PWD_HASH, passwords, 'md5'));
console.log("The password is:", findPassword(MY_PWD_HASH, passwords, 'rmd160'));