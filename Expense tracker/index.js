
let container = document.getElementById('container')



let arr = JSON.parse(localStorage.getItem('items')) || []
showData(arr)
let form = document.getElementById('form')
form.addEventListener('submit',(e) => {
        e.preventDefault()
        let obj = {
            description : form.description.value,
            expense : form.expense.value,
            category : form.category.value
        }
let arr = JSON.parse(localStorage.getItem('items')) || []
arr.push(obj)

showData(arr)
        localStorage.setItem('items',JSON.stringify(arr))
    })

function showData(arr){
    localStorage.setItem('items',JSON.stringify(arr))
    container.innerHTML = ''
    arr.forEach((e,i)=> {
        let card = document.createElement('div')
        card.className = 'shadow mt-3 p-3 rounded'
        card.innerHTML = `
        <p>Description : ${e.description}</p>
        <p>expense : ${e.expense}</p>
        <p>category : ${e.category}</p>
        <button onclick="deleteItem(${i})" class='btn btn-danger'>DELETE</button>
        <button onclick="editItem(${i})" class='btn btn-secondary'>EDIT</button>
        `    
container.appendChild(card)
    });
}
function deleteItem(i){
    let arr = JSON.parse(localStorage.getItem('items')) || []
    let newArr = arr.filter((e,item)=>{return item!=i})
    console.log(newArr)
    showData(newArr)
}
function editItem(i){
    console.log(i)
    document.getElementById('in').className = 'form-control my-2'
    document.getElementById('done').className='btn btn-primary'
    localStorage.setItem('i',i)
}
function done(){
    let i = localStorage.getItem('i')
    console.log(i)
    let input = document.getElementById('in')
    input.className = 'd-none'
    document.getElementById('done').className='d-none'
    let arr = JSON.parse(localStorage.getItem('items')) || []

      arr.map((e,id)=>{
        if(id==i) e.expense = input.value
    })
    console.log(arr)
    showData(arr)
}