window.onload = function(){
    let interval;
    let i = 0;
    let move;
    screen = window.screen.width;
    let ball = document.querySelector('.ball');
    let btn = this.document.querySelector('[name ="stop"]');
    ball.addEventListener('click',function(){
        if(move){
            clearInterval(interval);
            move=false;
            return;
        }
        interval = setInterval(function(){
            move=true;
            if(i >= screen-ball.clientWidth-25){
                i = 0;
            }
               ball.style.cssText = `left:${i++}px;`
            },5);
    });
    btn.addEventListener('click',function(){clearInterval(interval)});
}