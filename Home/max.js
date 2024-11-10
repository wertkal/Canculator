x`let box = document.querySelector('.box')
let bigNum = document.querySelector('.bignum')
let btnCheck = document.querySelector('.btncheck')
let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')

box.style.textAlign = 'center'
box.style.marginLeft = '500px'
box.style.width = '400px'
box.style.fontFamily = 'sans-serif'
btnCheck.style.marginTop = '15px'
btnCheck.style.backgroundColor = 'green'
btnCheck.style.border = 'none'
btnCheck.style.color = 'white'
btnCheck.style.padding = '3px 20px'

btnCheck.onclick = () => {
    let cnt = Math.max(num1.value, num2.value)
    bigNum.innerHTML = `The big number is : ${cnt}!`
}
