let box = document.querySelector('.box')

let user = [
    {
        id: 1,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
    {
        id: 2,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
    {
        id: 3,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
    {
        id: 4,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
    {
        id: 5,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
    {
        id: 6,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
    {
        id: 7,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
    {
        id: 8,
        img: 'https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw',
        title: 'Blair Vandervort',
        job: 'Customer Operations Manager',
        company: 'Kilback - Bednar',
        age: 53,
        desc: 'loremdlahfha apdsfu;lah; adfiouayijadfh 7y asdfdoapidf ;afsd ;ldhfuayif fkjadlsjfs'
    },
]




user.forEach((el) => {
    let div = document.createElement('div')
    div.classList.add('block1')
    
    let img = document.createElement('img')
    img.src = el.img
    img.classList.add('image')

    let title = document.createElement('h1')
    title.innerHTML = el.title
    title.classList.add('title')

    let job = document.createElement('h4')
    job.innerHTML = el.job
    job.classList.add('job')

    let company = document.createElement('h4')
    company.innerHTML = el.company
    company.classList.add('company')

    let age = document.createElement('h4')
    age.innerHTML = `Age: ${el.age}`
    age.classList.add('age')

    let desc = document.createElement('p')
    desc.innerHTML = el.desc
    desc.classList.add('desc')

    let block = document.createElement('div')
    block.classList.add('block')

    let btnEdit = document.createElement('button')
    btnEdit.innerHTML = 'Edit'
    btnEdit.classList.add('btnEdit')

    let btnDel = document.createElement('button')
    btnDel.innerHTML = 'Delete'
    btnDel.classList.add('btnDel')

    let btnInfo = document.createElement('button')
    btnInfo.innerHTML = 'Info'
    btnInfo.classList.add('btnInfo')

    block.append(btnEdit,btnDel,btnInfo)
    div.append(img, title, job, company, age, desc, block)
    box.append(div)
})