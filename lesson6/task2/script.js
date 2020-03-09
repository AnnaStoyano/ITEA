window.onload = function(){
    let moveElement = null;
    let Isprased;
    let conteiner = this.document.querySelector('.conteiner');
    conteiner.addEventListener('mousedown',function(e){
        let target = e.target;
        Isprased = true;
        if(target.className == 'ball')
            moveElement = target;
    });
    conteiner.addEventListener('mousemove',function(e){
        if(moveElement && Isprased)
            moveElement.style.cssText = formatCoordinates(e.x,e.y);
    });
    conteiner.addEventListener('mouseup',function(e){
        if(moveElement){
            Isprased = false;
        }
    })
    
}

function formatCoordinates(x,y){
    return `top:${y}px;left:${x}px`;
}