let btn = document.querySelector('.btn')
let imglamp = document.querySelector('.imglamp')
let box = document.querySelector('.box')



btn.style.marginTop = '10px'
btn.style.backgroundColor = 'yellow'
btn.style.color = 'black'
btn.style.border = 'none'
btn.style.padding = '5px 10px'
box.style.textAlign = 'center'



btn.onclick = () => {
    if(btn.innerHTML == 'Lamp Off'){
        btn.style.color = 'white'
        btn.style.backgroundColor = 'black'
        btn.innerHTML = "Lamp On"
        imglamp.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIdWq5W5Yf-mK1ErKS5xvKPKxQE85YqbjZBI2XiHn2h4H0-YFdt9qc0TlIcj6IsIVMSo&usqp=CAU"
        imglamp.style.width = '300px'
        imglamp.style.heigth = '350px'
    }else{
        btn.style.color = 'black'
        btn.style.backgroundColor = 'yellow'
        btn.innerHTML = "Lamp Off"
        imglamp.src = 'https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs='
        imglamp.style.width = '300px'
        imglamp.style.heigth = '350px'
    }
}