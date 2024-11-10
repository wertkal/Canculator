let box = document.querySelector('.box')


let user = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s',
        title: 'John Doe',
        city: 'New York USA',
        desc: 'info@maxarikiller.in +91 000 000 0000',
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s',
        title: 'John Doe',
        city: 'New York USA',
        desc: 'info@maxarikiller.in +91 000 000 0000',
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s',
        title: 'John Doe',
        city: 'New York USA',
        desc: 'info@maxarikiller.in +91 000 000 0000',
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s',
        title: 'John Doe',
        city: 'New York USA',
        desc: 'info@maxarikiller.in +91 000 000 0000',
    }
]


    function get(){
    box.innerHTML = '';
    user.forEach((el) => {
     let div = document.createElement('div')
     div.classList.add('div')

     let btnDel = document.createElement('button')
     btnDel.innerHTML = 'X'
     btnDel.classList.add('btnDel')

     let img = document.createElement('img')
     img.src = el.img
     img.classList.add('img')
     
     let title = document.createElement('h3')
     title.innerHTML = el.title
     title.classList.add('title')

     let city = document.createElement('p')
     city.innerHTML = el.city
     city.classList.add('city')

     let desc = document.createElement('p')
     desc.innerHTML = el.desc

     let input = document.createElement('input')
     input.classList.add('input')

     let block = document.createElement('div')
     block.classList.add('block')

     let checkbox = document.createElement('input')
     checkbox.type = 'checkbox'

     let btnEdit = document.createElement('button')
     btnEdit.innerHTML = 'Edit'
     btnEdit.classList.add('btnEdit')




     btnDel.onclick = () => {
        DelUser(el.id)
     }


     function DelUser(id){
        user = user.filter((el) => {
            return el.id != id
        });
        get()
     }

     block.append(checkbox,btnEdit)
     div.append(btnDel, img, title, city, desc, input, block)
     box.appendChild(div)
    });
}


get()