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
    console.log("Hello World");
    
}
fun