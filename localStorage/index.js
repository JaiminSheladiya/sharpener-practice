
let name = document.getElementById('name')
let email = document.getElementById('email')
let submit = document.getElementById('submit')
let show = document.getElementById('show')

async function getUsers(){
let data = await axios.get('https://crudcrud.com/api/8c07ef74f0b04bb8ab1434d75213027e/users')
await showDetails(data.data)
}
getUsers()

submit.addEventListener('click',async ()=>{
    let obj = {name : name.value,email : email.value}
    console.log(obj)
    await axios.post('https://crudcrud.com/api/8c07ef74f0b04bb8ab1434d75213027e/users' , obj )
    getUsers()
})

function showDetails(users){
    console.log(users)
    console.log(1)
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
        deleteItem(e._id,dlt)
        
        input.style.display=  'none'
        done.style.display=  'none'
        edit.addEventListener('click',()=>{
            input.style.display = 'inline'
            done.style.display = 'inline'
            done.addEventListener('click',async ()=>{
                console.log(e._id)
                await axios.put('https://crudcrud.com/api/8c07ef74f0b04bb8ab1434d75213027e/users/' + e._id,{name : input.value , email : e.email})
           await getUsers()
            })
        })

        show.append(p,input,done,edit,dlt)
    });
    
}

// Delete item :-
function deleteItem(i,dlt){
    dlt.addEventListener('click',async ()=>{
        console.log(i)
        await axios.delete('https://crudcrud.com/api/8c07ef74f0b04bb8ab1434d75213027e/users/' + i)
        await getUsers()
     })
}

