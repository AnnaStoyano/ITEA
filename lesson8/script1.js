let h2Great = document.querySelector('h2');
let localStorageLocal = window.localStorage;
let exitBtn = document.querySelector('input[type="button"]');

window.onload = function () {
    let user = formatStr(getLastCookie());
    if (check(user) === false) {
        this.addNewUser(user);
    }
    h2Great.innerHTML = "Hello " + this.decodeURIComponent(user[2]);
}

function getLastCookie() {
    let allCookieArr = document.cookie.split('; ');
    return allCookieArr[allCookieArr.length - 1];
}

function formatStr(str) {
    let strArr = str.split('=');
    let temp = strArr[1];
    strArr[1] = temp.slice(0, temp.indexOf(':'));
    strArr.push(temp.slice(temp.indexOf(':') + 1));
    return strArr;
}

function setToLocalStorage(key, value) {
    localStorageLocal.setItem(decodeURIComponent(key), value);
}

function addNewUser(user) {
    let userObj = {
        'fullName': user[2],
        'login': user[1],
        'email': user[0]
    };
    let toSave = JSON.stringify(userObj);
    this.setToLocalStorage(user[0], toSave);
}

function check(newUser) {
    if (localStorageLocal.length > 0) {
        for (let i = 0; i < localStorageLocal.length; i++) {
            let key = localStorageLocal.key(i);
            user = JSON.parse(localStorageLocal.getItem(key));
            if (user.email === newUser[0] && user.fullName === newUser[2]) {
                return true;
            }

        }
    }
    return false;
}

exitBtn.addEventListener('click', function () {
    window.location = '/index.html';
})