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
console.log(loginUserMsg("Kavan"))
console.log(loginUserMsg("Kava"))