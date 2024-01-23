const marvel_heros= ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman", "flash" , "batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const Allheros = marvel_heros .concat(dc_heros)
// console.log(Allheros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2,3,4,5,[2,3,5], 7 , [8,9]]
const real_array= another_array.flat(Infinity)

// console.log(real_array)




console.log(Array.isArray("Kavan"))
console.log(Array.from("Kavan"))
console.log(Array.from({name:"Kavan"})) // Intreasting...


let score1=100
let score2=150
let score3=250

console.log(Array.of(score1,score2,score3));