window.onload = function(){
   form1.userName.addEventListener('input',function(){
        validate(this,/\S/);
    });
    form1.email.addEventListener('input',function(){
        let pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    });
    form1.zip.addEventListener('input',function(){
        validate(this, /\d{5}/);
    });
    form1.addEventListener('submit',function(e){
        for(let i = 0;i < form1.elements.length;i++){
            let elem = form1.elements[i];
            if(elem.classList.contains('invalid')){
                alert("Допущены ошибки при заполнении формы.");
                event.preventDefault();
            }
        }
    });
}

function validate(elem, pattern) {
    let res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    }
    else {
        elem.className = "valid";
    }
}