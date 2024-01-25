const user = {
    username : "Kavan",
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Kav"
// user.welcomeMessage()

console.log(this);

// function kavan(){
//     let username="Kavan"
//     console.log(this.username);
// }
// kavan()

// const kavan = () =>{
//     let username ="Kavan"
//     console.log(this);
// }
// kavan

// const addtwo = (num1 , num2 )=> num1 + num2
const addtwo = (num1 , num2 )=> (num1 + num2)
// const addtwo = (num1 , num2 )=> ({num1 + num2})
console.log(addtwo(3,4));