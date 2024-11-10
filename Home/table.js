let tbody = document.querySelector('.tbody')
let add = document.querySelector('.Add')
let diaAdd = document.querySelector('.diaAdd')
let inpAddImage = document.querySelector('.inpAddFile')
let inpAddName = document.querySelector('.inpAddName')
let inpAddEmail = document.querySelector('.inpAddEmail')
let inpAddContact = document.querySelector('.inpAddContact')
let inpAddAge = document.querySelector('.inpAddAge')
let inpAddCountry = document.querySelector('.inpAddCountry')
let checkbox = document.querySelector('.checkbox')
let btnSave = document.querySelector('.btn-save')
let btnClose = document.querySelector('.btn-close')
let diaEdit = document.querySelector('.diaEdit')
let inpEditFile = document.querySelector('.inpEditFile')
let inpEditName = document.querySelector('.inpEditName')
let inpEditEmail = document.querySelector('.inpEditEmail')
let inpEditContact = document.querySelector('.inpEditContact')
let inpEditAge = document.querySelector('.inpEditAge')
let inpEditCountry = document.querySelector('.inpEditCountry')
let checkbox3 = document.querySelector('.checkbox3')
let btnSave2 = document.querySelector('.btn-Save')
let btnClose2 = document.querySelector('.btn-Close')

let users = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-m4D7gaOaHMGxxheIp_xF_OSzrba6G7MIA&s',
        title: 'Zabirzoda Abdurahmon',
        email: 'zabirozoda@gmail.com',
        contact: '+1 (936) 315 - 7811',
        age: 53,
        country: 'Afrika',
        status: true,
    },
    {
        id: 2,
        img: 'https://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
        title: 'Ibragimzoda Jumakhon',
        email: 'ibragimzoda@gmail.com',
        contact: '+1 (936) 315 - 7811',
        age: 24,
        country: 'Amerika',
        status: false,
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQND6lOovzDcBzCIYL-eKPi4n2bQLEWP46g&s',
        title: 'Aliev Muhammad',
        email: 'muhammad@gmail.com',
        contact: '+1 (936) 315 - 7811',
        age: 90,
        country: 'Russia',
        status: true,
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s',
        title: 'Qurbonov Safar',
        email: 'khulig@gmail.com',
        contact: '+1 (936) 315 - 7811',
        age: 87,
        country: 'Spain',
        status: false,
    },
    {
        id: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOyweUERP_PkAHflHnp-jMxGTx_D-DD638A&s',
        title: 'Yusuf Safaralizoda',
        email: 'safar.o2@gmail.com',
        contact: '+1 (936) 315 - 7811',
        age: 25,
        country: 'India',
        status: true,
    }
]



function get(user){
    tbody.innerHTML = '';
    user.forEach((el) => {
        let tr = document.createElement('tr')

        let idUser = document.createElement('td')
        idUser.innerHTML = el.id

        let imgUser = document.createElement('td')
        imgUser.classList.add('imgUser')
        let imgElem = document.createElement('img')
        imgElem.src = el.img

        let div = document.createElement('div')
        let titleUser = document.createElement('h3')
        titleUser.innerHTML = el.title
        titleUser.classList.add('titleUser')
        let emailUser = document.createElement('h4')
        emailUser.innerHTML = el.email
        emailUser.classList.add('emailUser')
        div.append(titleUser, emailUser)
        imgUser.append(imgElem, div)

        let contactUser = document.createElement('td')
        contactUser.innerHTML = el.contact

        let ageUser = document.createElement('td')
        ageUser.innerHTML = el.age

        let countryUser = document.createElement('td')
        countryUser.innerHTML = el.country

        let statusUser = document.createElement('td')

        let span = document.createElement('span')
        span.innerHTML = el.status ? 'Verified' : 'Rejected'
        statusUser.appendChild(span)
        if(el.status){
            span.style.color = 'green'
            span.classList.add('statusUser')
            titleUser.style.textDecoration = 'line-through'
            emailUser.style.textDecoration = 'line-through'
        }else{
            span.style.color = 'rgb(245, 104, 104)'
            span.classList.add('status')
        }

        let optionsUser = document.createElement('td')
        let btnEye = document.createElement('span')
        btnEye.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        `
        let btnEdit = document.createElement('span')
        btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        `
        let btnDel = document.createElement('span')
        btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
         `
        let checkbox2 = document.createElement('input')
        checkbox2.type = "checkbox"
        checkbox2.checked = el.status

        add.onclick = () => {
            diaAdd.showModal()
        }

        
        btnSave.onclick = () => {
        if(inpAddImage.value == '' || inpAddName.value == '' || inpAddEmail.value == '' || inpAddContact.value == '' || inpAddAge.value == '' || inpAddCountry.value == '' ){
             confirm("Пополните все Cтроки!!!")
        }else{

            users.push({
                id: Date.now(),
                img: inpAddImage.value,
                title: inpAddName.value,
                email: inpAddEmail.value,
                contact: inpAddContact.value,
                age: inpAddAge.value,
                country: inpAddCountry.value,
                status: checkbox.checked
            });
            
            get(user)
        diaAdd.close()
        inpAddImage.value = ''
        inpAddName.value = ''
        inpAddEmail.value = ''
        inpAddContact.value = ''
        inpAddAge.value = ''
        inpAddCountry.value = ''
        checkbox.checked = false;   
    }
}


        btnClose.onclick = () => {
            diaAdd.close()
        }


        btnDel.onclick = () => {
            funcDelUser(el.id)
        }


        checkbox2.onclick = () => {
            el.status = !el.status
            get(users)
        }

        // let idx = null;

        btnEdit.onclick = () => {
            diaEdit.showModal()     
            inpEditFile.value = el.img     
            inpEditName.value = el.title
            inpEditEmail.value = el.email
            inpEditContact.value = el.contact
            inpEditAge.value = el.age
            inpEditCountry.value = el.country
            checkbox3.checked = el.status
            // idx = el.id
        btnSave2.onclick = () => {
            ModulEdit(el)
        }
};
        

        btnClose2.onclick = () => {
            diaEdit.close()
        }


         optionsUser.append(btnEye, btnEdit, btnDel, checkbox2)
         tr.append(idUser, imgUser, contactUser, ageUser, countryUser, statusUser, optionsUser)
         tbody.append(tr)
    })
}



function funcDelUser(id){
            users = users.filter((el) => {
                return el.id != id;
            });
            get(users)
        }


function ModulEdit(el){
    el.img = inpEditFile.value
    el.title = inpEditName.value
    el.email = inpEditEmail.value
    el.contact = inpEditContact.value
    el.age = inpEditAge.value
    el.country = inpEditCountry.value
    el.status = checkbox3.checked
    get(users)
    diaEdit.close()
    
}

get(users)