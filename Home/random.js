let box = document.querySelector('.box')
let btnClick = document.querySelector('.btn-click')
let color = document.querySelector('.color')
let body = document.querySelector('body')


let Hex = [
    1,
    2,
    3,
    4,
    5,
    6,
    7, 
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]


body.style.fontFamily = 'sans-serif'
box.style.textAlign = 'center'

btnClick.onclick = () => {
    let hexColors = generateHex();
    body.style.backgroundColor = hexColors;
    color.innerHTML = hexColors;
}

function generateHex () {
    let hexColors = '#'
    for(let i=0; i<6; i++){
        hexColors += Hex[randomOfNumber()]
    }
    return hexColors;
}


function randomOfNumber () {
    return Math.floor(Math.random() * Hex.length);
}