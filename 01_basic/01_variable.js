const accountId = 144553
let accountEmail = "Kavan@google.com"
var accountPassword ="1234"
accountCity = "Ahmedabad"
let accountState =""

/*
Prefer not to use VAR
because of issue in block scope and function scope
*/

// accountId = 2

accountEmail = "Kavangami"
accountPassword = "212121"
accountCity = "Pune"
console.log(accountId);
console.table([accountId, accountEmail ,accountPassword ,accountCity , accountState])