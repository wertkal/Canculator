let box = document.querySelector('.box')
let block = document.querySelector('.block')
let btnPlus = document.querySelector('.plus')
let btnRest = document.querySelector('.rest')
let btnMinus = document.querySelector('.minus')
let counter = document.querySelector('.counter')
let cnt = 0;




box.style.textAlign = 'center'
box.style.marginTop = '160px'

btnPlus.style.bacgroundColor = 'green'
btnRest.style.bacgroundColor = 'black'
btnRest.style.color = 'white'
btnMinus.style.bacgroundColor = 'red'




btnPlus.onclick = () => {
    cnt++;
    counter.innerHTML = cnt;
        counter.style.color = 'green';
}


btnRest.onclick = () => {
    cnt = 0;
    counter.innerHTML = cnt;
        counter.style.color = 'black'
}


btnMinus.onclick = () => {
    cnt--;
    counter.innerHTML = cnt;
    if(counter < 0){
        counter.style.color = 'red'
    }
}

