let li = document.querySelector('#items')

// parentNode
// li.parentNode.style.backgroundColor = '#f4f4f4'

// parentElement
// li.parentElement.style.backgroundColor = '#f4f4f4'

// childNodes

// console.log(li.childNodes)
// console.log(li.children)
// li.children[1].style.color='yellow'

// firstChild
// console.log(li.firstChild)
// firstElementChild
// console.log(li.firstElementChild)
// li.firstElementChild.textContent = 'Hello 1'

// lastChild
// console.log(li.lastChild)
// lastElementChild
// console.log(li.lastElementChild)
// li.lastElementChild.textContent = 'Hello last'

// nextSibling
// console.log(li.nextSibling)
// nextElementSibling
// console.log(li.nextElementSibling)

// previousSibling
// console.log(li.previousSibling)
// console.log(li.previousElementSibling)
// li.previousElementSibling.style.color = 'red'

// createElement

let newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id = 'hello1'
newDiv.setAttribute('title', 'Hello Div')
var newDivText = document.createTextNode('Hello World')
newDiv.appendChild(newDivText)
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
console.log(newDiv)
container.insertBefore(newDiv,h1)