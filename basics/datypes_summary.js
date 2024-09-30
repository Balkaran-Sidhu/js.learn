// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id == anotherID)
// Reference Type (Non Primitive) : Array, Objects, Functions

const marvel = (["Capatain America", "IronMan","Hulk", "Thor", "Black Widow","HawkEye"])

// object
let obj ={
    name: "Balkaran",
    age: 23,
}

// function
const fun = function(){
    console.log("Hello World");}

    // https://262.ecma-international.org/5.1/#sec-11.4.3


// .............................................Memory

// Stack (in Primitive datatypesstcak memory is used ), Heap (in non primitive datatypes heap memory is used)

let user1 = {
    email: "user@cc.com",
    id: 123
}

let user2 = user1

user2.email = "user2@cc.com"

console.log(user1.email)    
console.log(user2.email);   //  email is changed as referece was giben of the heap memory and the the ture data in that memory was changed 
// so the change was also made for the user 1 they both direct to same heap in the memory.


