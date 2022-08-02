// let arr = [1,2,3,4,5];

// let narr = [];

// Map
// narr = arr.map((value,idx)=>{
//     return value*2;
// })

// Filter

let arr = ["mango","apple","banana","grapes","watermelon"];

let narr = [];

narr = arr.filter((value,idx)=>{
        return value.length>5;
})
console.log(arr);
console.log(narr);