let form = document.getElementById('form')
let container = document.getElementById('container')
let update = document.getElementById('update')
let submit = document.getElementById('submit')

async function getData(){
   let items =  await axios.get('https://crudcrud.com/api/24c7d979c30d4416953f91ecba96f18c/items')
   await showData(items.data)
}
getData()
form.addEventListener('submit',async (e) => {
    e.preventDefault()
    let obj = {
        description : form.description.value,
        expense : form.expense.value,
        category : form.category.value
    }
    await axios.post('https://crudcrud.com/api/24c7d979c30d4416953f91ecba96f18c/items',obj)
    getData()
})

function showData(arr){
    container.innerHTML = ''
    arr.forEach((e,i)=> {
        let id = (e._id).toString()
        let card = document.createElement('div')
        card.className = 'shadow mt-3 p-3 rounded'
        card.innerHTML = `
        <p>Description : ${e.description}</p>
        <p>expense : ${e.expense}</p>
        <p>category : ${e.category}</p>
        <button onclick="deleteItem('${id}')" class='btn btn-danger'>DELETE</button>
        <button onclick="editItem('${id}')" class='btn btn-secondary'>EDIT</button>
        `    
container.appendChild(card)
    });
}
async function deleteItem(i){
   await axios.delete('https://crudcrud.com/api/24c7d979c30d4416953f91ecba96f18c/items/'+i)
await getData()
}
var editId
function editItem(i){
    editId = i
    window.scrollTo(0, 0);
    update.classList = 'btn btn-success d-block m-auto mt-2 w-100'
    submit.classList = 'd-none'
}

update.addEventListener('click',async ()=>{
    let obj = {
        description : form.description.value,
        expense : form.expense.value,
        category : form.category.value
    }
    await axios.put('https://crudcrud.com/api/24c7d979c30d4416953f91ecba96f18c/items/'+editId,obj)
    await getData()

    update.classList = 'd-none'
    submit.classList = 'btn btn-primary d-block m-auto mt-2 w-100'
})
