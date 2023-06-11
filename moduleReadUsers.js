const
    // iconv = require('iconv-lite'),
    { exec } = require('child_process')

const getUserList = (callback) => {exec(
    'net user',
    (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        let users = stdout
        .slice(stdout.lastIndexOf('-') + 1)
        .match(/([A-Za-zА-Яа-я0-9_]+)/g)

        console.log(`Func:getUserList stdout: ${users}`);
        callback(users)

    }
);
}

const checkUser = (enteredUser, callback) => getUserList ((userList) => {
    if (userList.includes(enteredUser)) {callback('Пользователь есть')}
    else {callback('Пользователя нет')}
} )

// const testFunc = checkUser ('AlexeyT_mai', (result) => console.log(result))


module.exports = checkUser