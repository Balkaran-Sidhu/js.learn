//Reduce // can be used for totaling shopping cart

const myNums =[1,2,3,4]


const sumTotoal = myNums.reduce(function (accumulator,currentValue){
    console.log(`acc: ${accumulator} and currval: ${currentValue}`)
    return accumulator+currentValue
}, 0)

console.log(sumTotoal)

const myTotoal = myNums.reduce((acc,num)=> (acc+num),0)
console.log(myTotoal)

const shopCart = [
    {
        itemName: "shirt",
        price: 50
    },
    {
        itemName: "shoes",
        price: 150
    },
    {
        itemName: "sweatpants",
        price: 60
    }
]

const totalprice = shopCart.reduce((acc,num)=>(acc+ num.price),0)
console.log(totalprice)