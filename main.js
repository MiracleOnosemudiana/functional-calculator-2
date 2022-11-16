let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.screen');
let actionBtns = document.querySelectorAll('.action-btn');


buttons.forEach(item => {
    item.addEventListener('click', calculate)
})

function calculate(){
    
    if(this.textContent == '='){
        screen.value = eval(screen.value);
        enableAllActionBtn();
    } else if(this.textContent == 'CE' || this.textContent == 'C'){
        screen.value = '';
        loadFunction();
    }else if(this.textContent == 'Del'){
        screen.value = screen.value.slice(0, -1);
    }
    else {
        enableAllActionBtn();
        screen.value += this.textContent;
    }
}

actionBtns.forEach(item => {
    item.addEventListener('click', disableAllActionBtn);

})

function disableAllActionBtn(){
    actionBtns.forEach(item => {
        item.style.pointerEvents = 'none';
    })
}

function enableAllActionBtn(){
    actionBtns.forEach(item => {
        item.style.pointerEvents = 'all';
    })
}


document.onload = loadFunction();

function loadFunction(){
    actionBtns.forEach(item => {
       if(item.textContent == '-'){
        item.style.pointerEvents = 'all';
       } else {
        item.style.pointerEvents = 'none';
       }
    })
}