//array

const myArr = [1 ,2 ,3 ,4 ,5 ,6]
const myHeros = ["kavan" , "Krish"]
const myArr2 = new Array(2, 3,4,4,5,)
console.log(myArr[0]);
console.log(myHeros[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);


// slice , splice

console.log("a" , myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);