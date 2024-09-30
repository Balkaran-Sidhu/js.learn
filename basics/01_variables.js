const accountId = 1231
let account_email = "balkaransidhu48.com"
var account_password = "1234"
city = "Moga"
let accountState  // will be undefined as its not inatiliazed
// accountId = 2  could not change the fixed constant value can be used for fixed unique ids
/* Please dont use var as it has issue with scope in block and functional scope */

account_email = "balkaran47.com"
account_password = "1321"
city = "Ludhiana"
console.table([accountId,account_email,account_password,city,accountState])

