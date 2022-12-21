// QuerySelector & QuerySelectorAll

let li = document.querySelector('li:nth-child(2)')
li.style.backgroundColor = 'green'
document.querySelector('li:nth-child(3)').style.display = 'none'


let list = document.querySelectorAll('li')
list[1].style.backgroundColor = 'green'
for(let i = 0;i<list.length;i++){
    if(i%2===0)list[i].style.backgroundColor = 'green'
}