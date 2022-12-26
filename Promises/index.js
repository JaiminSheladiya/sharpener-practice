let posts = [

    {title : 'Post One', body : 'This is post One' , createdAt :new Date() },

    {title : 'Post Two', body : 'This is post Two' , createdAt :new Date()}

]

function getPosts(){

setTimeout(()=>{

let output = ''

posts.forEach((post,index)=>{

    output += `<li>${post.title} created at - ${post.createdAt}</li>`

})

document.body.innerHTML = output

},1000)

}


function createPost(post){
    return new Promise((res,rej)=>{
        setTimeout(()=>{

            posts.push(post)
    
            const err = false
            if(!err) res()
            else rej('Error : Something went wrong')
    
        },2000)
    })
}

function deletePost(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
         if(posts.length){
                posts.pop()
                res()
            }
            else rej('Error : Array is empty')
        },1000)
    })
}

createPost({title : 'Post Three', body : 'This is post Three', createdAt :new Date()})
createPost({title : 'Post Three', body : 'This is post Three', createdAt :new Date()})
.then(execute)

function execute(){
    getPosts()
    deletePost().then(execute).catch(e=>console.log(e)  )
}

// Promise.all
const p1 = Promise.resolve('Helo')
const p2 = 10
const p3 = new Promise((res,rej)=>setTimeout(res,2000,'Good bye'))

Promise.all([p1,p2,p3]).then(res=>console.log(res))

const user = {
    username : 'Jaimin',
    lastActivityTime : 'Long time ago'
}

function updateLastUserActivityTime(){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        user.lastActivityTime = new Date()
        res(user.lastActivityTime)
      },1000)  
    })
}

function userUpdate(){
   Promise.all([
    createPost({title : 'Post Three', body : 'This is post Three', createdAt :new Date()}),
    updateLastUserActivityTime()
   ]).then(([c,u])=>console.log('last update : ' ,u)).catch(e=>console.log(e))
}
userUpdate()