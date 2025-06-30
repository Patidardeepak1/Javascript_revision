//reduce


const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
// console.log(`acc:${acc} and currval:${currval}`);
//     return  acc+currval
// },0)


const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);


const shoppingCart=[

    {
itemName:"js course",
price:2333
    },
    {
        itemName:"py course",
        price:4656
    },
    {
       itemName:"data science",
       price:654656
    },
    {
        itemName:"physics",
        price:410
    }
]

const priceTopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceTopay);



