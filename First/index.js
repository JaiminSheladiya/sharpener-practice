let c = 0

let h1 = document.getElementById('count')
h1.innerText = c


let over = document.getElementById('over')
over.addEventListener('mouseover',()=>{
    c++
    h1.innerText = c
})

let out = document.getElementById('out')
out.addEventListener('mouseout',()=>{
    c++
    h1.innerText = c
})

let reset = document.getElementById('reset')
reset.addEventListener('click',()=>{
    c = 0
    h1.innerText = c
})