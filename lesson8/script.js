let btn = document.querySelector('.btn');
let form = document.querySelector('form');

btn.addEventListener('click', function (e) {
    let addToCookie = '';
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].getAttribute('type') === 'email') {
            let userlogin = getUserLogin(form.elements[i].value);
            if (userlogin == 'admin' || userlogin == 'Admin') {
                window.location.href = '/admin.html';
            }
            addToCookie = `${getEncodeURI(form.elements[i].value)}=${getEncodeURI(userlogin)}`;
        } else if (form.elements[i].getAttribute('type') === 'text') {
            addToCookie += ':' + form.elements[i].value;
        }
    }
    console.log(addToCookie);
    document.cookie = addToCookie;
    e.submit();
});

form.addEventListener('input', function (e) {
    let target = e.target;
    if (target.getAttribute('type') === 'email') {
        let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        checkPattern(pattern, target);
    } else if (target.getAttribute('type') === 'password') {
        checkPattern(/\S/, target);
    }
})

function checkPattern(pattern, element) {
    if (pattern.test(element.value)) {
        element.style.background = 'lightgreen';
    } else {
        element.style.background = 'pink';
    }
}

function getUserLogin(str) {
    let strsBetweenDog = str.split('@');
    return strsBetweenDog[0];

}

function getEncodeURI(value) {
    return encodeURIComponent(value);
}