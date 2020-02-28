let list = document.getElementById('list');


function createNewItem(tagName,value){
    let newItem = document.createElement(tagName);
    newItem.innerHTML = value;
    return newItem;
}

function cssStyleForSelectElement(selectElement,state){
    if(state){
        selectElement.style.color = 'green';
        selectElement.style.fontSize='20px';
    }
    else {
        selectElement.style.color = 'black';
        selectElement.style.fontSize='16px';
    }
}

function isSelected(element){
    if(element.style.color === 'green')
        return true;
    else{
        return false;}
}

 function appendToEnd(form) {
    if(form.input.name){
        let itemToInsert = createNewItem('li',form.input.value);
        list.appendChild(itemToInsert);
    }
}

function appendToStart(form){
    if(form.input.value){
        let itemToInsert = createNewItem('li',form.input.value);
        let firstItem = list.firstElementChild;
        list.insertBefore(itemToInsert,firstItem);
    }
}

function selectFirstItem(form){
   let firstItem=list.firstElementChild;
   cssStyleForSelectElement(firstItem,true);
   
}

function selectLastItem(form){
    let lastItem=list.lastElementChild;
    cssStyleForSelectElement(lastItem,true);
    
}

function SelectItemLoop(fromStart){
    let current,next;
    let lastElementCount,firstElementCount;
    //debugger;
    let helpFunction = function(fromStart,i){
        if(fromStart){
            if(i < list.childElementCount)
                return true;
        }
        else {
            if(i >= 0)
                return true;
        }
    }

    let i;
    if(fromStart){
        firstElementCount = i = 0;
        lastElementCount = list.childElementCount-1;
    }
    else{
        firstElementCount = i = list.childElementCount-1;
        lastElementCount = 0;
        
    }
    while(helpFunction(fromStart,i)){
        if(isSelected(list.children[i])){
            current = list.children[i];
            cssStyleForSelectElement(current,false);
            if(i=== lastElementCount)
                next = list.children[firstElementCount];
            else{
                if(fromStart)
                    next = list.children[i+1];
                else 
                    next = list.children[i-1];
            }
            cssStyleForSelectElement(next,true);
            return current;
        }
        if(fromStart)
            i++;
        else 
            i--;
    }
}


function selectNextItem(form){
    let selectElement = SelectItemLoop(true);
    if(!selectElement){
        selectFirstItem();
    }
}



function selectPrevItem(form){
    let selectElement = SelectItemLoop(false);
    if(!selectElement){
        selectLastItem();
    }
}

function removeSelectItem(form){
    let elements= list.children;
    for(let i=elements.length-1;i>=0;i--){
        if(elements[i].style.color != 'black'){
            elements[i].style.color = 'black';
            elements[i].style.fontSize ='16px';
        }
    }
}

function removeLastItem(form){
    if(list.childElementCount>0){
        list.removeChild(list.lastElementChild);
    }
}