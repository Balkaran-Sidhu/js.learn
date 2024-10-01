const name = "Balkaran"
const score = 3

console.log(`Hello my name is ${name} and my repo count is ${score}`); // String interplation--- to create a place holders to inect variables

const gName = new String('Balkaran-Singh-Sidhu')

console.log(gName[0]);  // accessing the value using the key value pair
console.log(gName.__proto__); //
console.log(gName.length);
console.log(gName.toUpperCase);  //Learn methods of String

const aString = gName.slice(-8,4) // could you negative value in slice but substring will ignore it
const str2 = gName.trim(); // remove spaces from front and back

const url = "https://balkaran.com/balkaran%20sidhu"

console.log(url.replace('%20','-'))

console.log(url.includes('Sidhu')) // to check if it is in the string

console.log(gName.split('-'))  // will split the text based on the splitter given into the ordered list
