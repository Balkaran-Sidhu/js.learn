const userEmail = "Balkaran@marvel.com"

if(userEmail){
    console.log("Got User Email")
}
else{
    console.log("Don't have user email")
}

//  Falsy Values 

//false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Values (will be consider true )
// "0", 'false', " ", [], {}, function(){}

// if(Object.keys(objectName).length ===0 ){
//     console.log("Object is empty")
// } 


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val2 = null?? 10 // ?? is for safty check if null is given sometimes with database

//val1 = undefined ?? 15 ?? 20 // first value after null and undefined will be assigned

console.log(val1);

// Terniary Operator

//condition ?  true : false