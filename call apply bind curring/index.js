let obj = {
 a : 'jaimin'
}
function fun(s,n){
    console.log(this.a ,s,'roll=>',n)
   }

fun.call(obj, 'sheladiya',6)
fun.apply(obj, ['sheladiya',6])
let t = fun.bind(obj,'sheladiya',6)
t()

// 4
let Student = {

 age : 20

}
function printAge(){
 console.log(this.age)
}
let s1 = printAge.bind(Student)
s1()


// 5
let multiply = function(x,y){

 console.log(x*y)

}

let multiplyByTwo = multiply.bind(this,2)



multiplyByTwo(5)



let mutipy = function(x){

 return function(y){

  console.log(x*y)

 }

}

mutipy(2)(3)





