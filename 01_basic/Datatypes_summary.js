// ******Primitive datatypes******//
//7 types : String , Number , Boolearn , Null , Undefined ,Symbol , BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123131234234n
// ******Non-Primitive/Referense Datatype***********//
// Array , Objects , Functions 

const heros = ["Krish" , "Kavan"]
let myObj ={
    name:"Kavan",
    age:21,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof anotherId);









//******************************************************************************* *

// Stack (Primitive) , Heap(Non_Primitive)

let myName = "Kavan"

let anotherName = myName
anotherName = "KavanGami"

console.log(anotherName);
console.log(myName);

let userOne ={
    email:"Kavangoogle.com",
    upi : "user123"
}
let userTwo = userOne

userTwo.email = "Kavangami1234gmail.com"

console.log(userOne.email)
console.log(userTwo.email)