function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("n");
    
}
// sayMyName()

function addTwoNum(number1 , number2){
    // let result = number1 + number2
    // return result

    return number1+number2
}

const result = addTwoNum(3,5)
// console.log("Result",result);

function loginUserMsg(usernames = "Kav"){
    if(!usernames){
        console.log("Please enter a user name");
        return
    }
    return `${usernames} Just logged in`
}
// console.log(loginUserMsg("Kavan"))
// console.log(loginUserMsg("Kava"))

function addCartPrice(...num1){
    return num1
}
console.log(addCartPrice(200,400,500))

const user = {
    usernames:"Kavan",
    price:"1990"
}
function handleObject(anyobejct){
    console.log(`Username is ${anyobejct.user}price is ${anyobejct.price}`);


}
// handleObject(user)
handleObject({
    usernames:"sam",
    price:399
})

const myNewArray= [200 ,400 ,500 ,232]
{
    function returnSecondValue(){
        return getArray[1]
        
    }
}