// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = 21
tinderUser.name = "Kavan"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regualrUser ={
    email : "kavangami.com",
    fullname:{
        userFullName:{
            firstname:"Kavan",
            lastnmae:"Gami"

        }
    }
}
// console.log(regualrUser.fullname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

// const obj3 ={obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        emailId: "Kavangami"
    },
    {
        id: 2,
        emailId: "Kavangami"
    }
]
users[1].emailId
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course ={
    coursename : "Kavan Gami",
    price :"100",
    courseInstructor : "Kavan"
}
const {courseInstructor: inst} = course
console.log(inst);

// {
//     name : "kavan",
//     price: "212",
//     courseName: "Kavan Gami"
// }

[
    {},
    {},
    {}
]