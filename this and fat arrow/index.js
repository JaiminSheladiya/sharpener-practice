// 1 & 2 =>

// this inside global scope

this.table = 'window table'

console.log(this.table)



// this inside object

let room = {

 table : 'my table',

 cleanTable(){

 console.log(`cleaning ${this.table}`)

 }

}

room.cleanTable()



// this inside function 

function decorateTable(){

 console.log(`decorating ${this.table}`)

}

decorateTable.call(room)



// this inside inner function

const cleanTable = function(soap){

 that = this

 const innerFunction = function(_soap){

  console.log(`cleaning innner ${that.table} using ${_soap}`)

 }

 innerFunction(soap)

}

cleanTable.call(room,'lifebuoy')



// this inside a constructor



let createRoom = function(name){

 this.table = `${name}s table`

}

const myRoom = new createRoom('Jaimin')

console.log(myRoom)



// this inside classes



class createHome {

 constructor(name){

  this.table = `${name}s table`

 }

 cleanTable(){

  console.log(`cleaning ${this.table}`)

 }

}

let home = new createHome('John')

home.cleanTable()

// 3 4 5 6=>

class Student{
 static count
  constructor(name,age,phoneNumber,boardMarks){
   Student.count = (Student.count+1) || 1
    this.name = name
    this.age = age
    this.phoneNumber = phoneNumber
    this.boardMarks = boardMarks
  }
  check(){
    if(this.boardMarks > 40) console.log('egligible ')
    else console.log('not egligible ')
  }
  count(){
    console.log(Student.count)
  }
}

let s1  = new Student('Jaimin',22,9687316611,98.56)
// console.log(s1)
// s1.check()

let s2  = new Student('John',25,9687316611,98.56)
let s3  = new Student('Jasmin',21,9687316611,98.56)
let s4  = new Student('Mickle',18,9687316611,98.56)
let s5  = new Student('Morgan',20,9687316611,98.56)
s5.count()