function addElement(secondDiv){
    secondDiv.id = 'two_second';
    secondDiv.innerHTML = secondDiv.id;
    let firstDiv = document.createElement('div');
    firstDiv.id='first_second';
    firstDiv.classList.add('main');
    firstDiv.innerHTML = firstDiv.id;
    secondDiv.insertAdjacentElement('beforeBegin',firstDiv);
}