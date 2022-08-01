// append a new div with two new classes to the .main_container div 
document.body.onload = addElement;
function addElement() {
    let newDiv = document.createElement('div')
    newDiv.classList.add('champ_container', 'pyke');
    let currentDiv = document.getElementsByClassName('main_container');
    document.body.insertBefore(newDiv, currentDiv)
}



