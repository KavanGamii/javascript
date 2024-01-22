const name = "Kavan"
const repCount = 50
// console.log(name + repCount + "Value");
console.log(`Hello my name is ${name} My RepoCount is ${repCount}`);
const gameName = new String('Kavan_Gami')

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('v'))

const newString = gameName.substring(0,6)

console.log(newString)

const anotherString = gameName.slice(-8,6)
console.log(anotherString)

const newSString = "     Kavan    "
console.log(newSString)
console.log(newSString.trim()) //it's help to remove un wanted space from the string

const url = "www.google.com//kavan20%Gami"
console.log(url.replace('20%','_'))
console.log(url.includes('Gami'))

console.log(gameName.split('_'))