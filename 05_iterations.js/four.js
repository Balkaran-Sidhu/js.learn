//const coding = ["js", "java", "python", "cpp", "ruby"]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item                                  // for each doenot return any values in any case
// })

// console.log(values)


const myNums = [1,2,3,,4,5,6,7,8,9,10]


const values = myNums.filter((num)=>  {
    return num>4               // return key ia used because you opened {} scope
} )

const newNums=[]

myNums.forEach((num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)
console.log(values)

