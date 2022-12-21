// console.log(document.all[10])
// document.all[10].textContent = 'Hello'
// console.log(document.images)


 let headerTitle = document.getElementById('header-title')
//  headerTitle.innerText = 'Hello'
// headerTitle.innerHTML = '<h3>Hello H3 </h3>'

// headerTitle.style.borderBottom = 'solid 3px white'

// getElementByClassName :-

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// items[1].textContent = 'Helloo 2'
// for(let i = 0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold'
//     items[i].style.backgroundColor = '#f4f4f4'
// }
// items[2].style.backgroundColor = 'green'

// getElementByTagName  :-


var li = document.getElementsByTagName('li')
let newLi = document.createElement('li')
console.log(li)
for(let i = 0;i<li.length;i++){
    li[i].style.fontWeight = 'bold'
    li[i].style.backgroundColor = '#f4f4f4'
}
