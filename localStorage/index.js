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
    showDetails(users)
})
console.log(users)

function showDetails(users){
    localStorage.setItem('users',JSON.stringify(users))
    show.innerHTML = ''
    users.forEach((e,i)=> {
        let p = document.createElement('p')
        let input = document.createElement('input')
        input.placeholder = 'Enter name'
        let done = document.createElement('button')
        done.innerText = 'DONE'
        p.innerText = `name : ${e.name} email : ${e.email}`

        let edit = document.createElement('button')
        let dlt = document.createElement('button')
        edit.innerText ='EDIT'
        dlt.innerText ='DELETE'
        deleteItem(i,dlt)
        
        input.style.display=  'none'
        done.style.display=  'none'
        edit.addEventListener('click',()=>{
            input.style.display = 'inline'
            done.style.display = 'inline'
            done.addEventListener('click',()=>{
                console.log(input.value,i)
                users.map((e,id)=>{
                    if(id === i) e.name = input.value
                })
               showDetails(users)
            })
        })

        show.append(p,input,done,edit,dlt)
    });
    
}

// Delete item :-
function deleteItem(i,dlt){
    dlt.addEventListener('click',()=>{
        console.log(i)
        let newUsers = users.filter((e,id)=> id!=i )
        console.log(newUsers);
        showDetails(newUsers)
     })
}

