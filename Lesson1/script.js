
 function appendToEnd(form) {
    if(form.input.name){
        let newItem = document.createElement('li');
        newItem.innerHTML=form.input.value;
        document.getElementById('list').appendChild(newItem);
    }
}

function appendToStart(form){
    if(form.input.value){
        let newItem = document.createElement('li');
        newItem.innerHTML=form.input.value;
        let firstItem = document.getElementById('list').firstElementChild;
        document.getElementById('list').insertBefore(newItem,firstItem);
    }
}

function selectFirstItem(form){
   let firstItem=document.getElementById('list').firstElementChild;
   firstItem.style.color='green';
   firstItem.style.fontSize='20px';
   
}

function selectLastItem(form){
    let firstItem=document.getElementById('list').lastElementChild;
    firstItem.style.color ='green';
    firstItem.style.fontSize ='20px';
    
}

function selectNextItem(form){
    let current,next;
    let elements= document.getElementById('list').children;
    for(let i=0;i<elements.length;i++){
        current=elements[i];
        if(i!=elements.length-1){
            next=elements[i+1];
        }
        else{
            next=elements[0];
        }    
        if(current.style.color == 'green' && next.style.color != 'green'){
            next.style.color = 'green';
            next.style.fontSize ='20px';
            break;
        }
    }
}

function selectPrevItem(form){
    let current,prev;
    let elements= document.getElementById('list').children;
    for(let i=0;i<elements.length;i++){
        current=elements[i];
        if(i!=0){
            prev=elements[i-1];
        }
        else{
            prev=elements[elements.length-1];
        }    
        if(current.style.color == 'green' && prev.style.color != 'green'){
            prev.style.color = 'green';
            prev.style.fontSize ='20px';
            break;
        }
    }
}

function removeSelectItem(form){
    let elements= document.getElementById('list').children;
    for(let i=elements.length-1;i>=0;i--){
        if(elements[i].style.color != 'black'){
            elements[i].style.color = 'black';
            elements[i].style.fontSize ='16px';
        }
    }
}

function removeLastItem(form){
    let elements= document.getElementById('list');
    if(elements.childElementCount>0){
        elements.removeChild(elements.lastElementChild);
    }
}