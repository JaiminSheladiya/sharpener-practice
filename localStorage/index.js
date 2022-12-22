let name = document.getElementById('name')
let email = document.getElementById('email')
let submit = document.getElementById('submit')
let show = document.getElementById('show')

let users = JSON.parse(localStorage.getItem('users')) || []
showDetails(users)
submit.addEventListener('click',()=>{
    let obj = {name : name.value,email : email.value}
    console.log(obj)
    users.push(obj)
    localStorage.setItem('users',JSON.stringify(users))
    showDetails(users)
})
console.log(users)

function showDetails(users){
    show.innerHTML = ''
    users.forEach(e => {
        let p = document.createElement('p')
        p.innerText = `name : ${e.name} email : ${e.email}`
        show.append(p)
    });
    
}

