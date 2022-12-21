let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

// Form submit event
// add item
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let newItem = document.getElementById('item')

    // create new li element
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem.value))
    
    // create delete button
    let btn = document.createElement('button')
    btn.className = 'btn btn-danger btn-sm float-right delete'
    btn.appendChild(document.createTextNode('X'))

    // create edit button
    let edit = document.createElement('button')
    edit.className = 'btn btn-primary float-right btn-sm mr-3'
    edit.innerText='EDIT'
    li.appendChild(btn)
    li.appendChild(edit)

    itemList.appendChild(li)
})

// delete event

itemList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li= e.target.parentElement
            itemList.removeChild(li)
        }
    }
})

