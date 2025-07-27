console.log("Introduction to Array Data Structure");

//Reference Type
//objects, arrays, functions are reference types

//Primitive Type
//string, number, boolean, null, undefined, symbol

// let arr = [1, 2, 3, 4, 5];

// let obj = {
//     name: "Ashish",
//     age: 25,
//     isMarried: true,
//     hobbies: ["Reading", "Coding", "Traveling"]
// };
// console.log(obj); // Output: { name: 'Ashish', age: 25, isMarried: true, hobbies: [ 'Reading', 'Coding', 'Traveling' ] }
// console.log(obj.name); // Output: Ashish
// console.log(obj.age); // Output: 25
// // console.log(arr); // Output: [1, 2, 3, 4, 5]
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]); // Output: 1 2 3 4 5
// // }

// // for(let i of arr){
// //     console.log(i); // Output: 1 2 3 4 5
// // }
// // for(let i in arr){
// //     console.log(i); // Output: 0 1 2 3 4 (indexes of the array)
// // }

// //Array Methods

// let arr = [1, 2, 3, 4, 5];
// console.log(arr); // Output: [1, 2, 3, 4, 5]
// arr.push(6); // Adds 6 to the end of the array
// console.log(arr); 
// arr.pop(); // Removes the last element (6) from the array
// console.log(arr); // Output: [1, 2, 3, 4, 5]
// arr.shift(); // Removes the first element (1) from the array
// console.log(arr); // Output: [2, 3, 4, 5]
// arr.unshift(1); // Adds 1 to the beginning of the array
// console.log(arr); // Output: [1, 2, 3, 4,
// arr.slice(1, 3); // Returns a shallow copy of the array from index 1 to index 3 (exclusive)
// console.log(arr); // Output: [2, 3]
// arr.splice(1, 2, 6, 7); // Removes 2 elements starting from index 1 and inserts 6 and 7
// console.log(arr); // Output: [2, 6, 7]
// arr.reverse(); // Reverses the order of the array
// console.log(arr); // Output: [7, 6, 2]
// arr.sort(); // Sorts the array in ascending order
// console.log(arr); // Output: [2, 6, 7] (if the

// console.log(arr.length); // Returns the length of the array (5)
// console.log(arr.indexOf(6)); // Returns the index of the first occurrence of 6 (2)
// arr.lastIndexOf(6); // Returns the index of the last occurrence of 6 (1)
// arr.includes(6); // Returns true if 6 is in the array, false otherwise (true)

// let nums=[10,20,30,40];

// let ansArr=nums.map((Value)=>{
//     return Value*Value;
// });
// console.log(ansArr); // Output: [100, 400, 900, 1600]

// let ansArr2=nums.filter((Value)=>{
//     return Value>20;
// });
// console.log(ansArr2); // Output: [30, 40]

// let ansArr3=nums.reduce((prev,curr)=>{
//     return prev+curr;
// },0);
// console.log(ansArr3); // Output: 100
// let even=nums.filter((value)=>{
//     if(value%2===0)
//         return true;
//     else
//         return false;
// });
// console.log(even); // Output: [10, 20, 40]
// let firstEven = nums.find((value) => {
//     if (value % 2 === 0)
//         return true;
//     else
//         return false;
// });
// console.log(firstEven); // Output: 10



// ForEach

let arrs=[10,20,30,40];
arrs.forEach((value , index, arr)=>{
    console.log("Number: ",value," Index: ",index," Array: ",arr);
});

//More Examples of forEach loop

arrs.forEach((value)=>{
    console.log(value**2);
});

arrs.forEach((value,index,arrs)=>{
    console.log(arrs);
});


//Array with function

brr=[1,2,4,5,6,7,8,9,10];
let ansArr=brr.map((value)=>{
    return value+1;
});
console.log(ansArr); // Output: [2, 3, 5, 6, 7, 8, 9, 10, 11

function getSum(brr)
{
    let sum=0;
    brr.forEach((value)=>{
        sum+=value;
    });
    return sum;
}
let ans=getSum(brr);
console.log(ans); // Output: 55
//Filter
let evenArr=brr.filter((value)=>{
    if(value%2===0)
        return true;
    else
        return false;
});
console.log(evenArr); // Output:[2, 4, 6, 8, 10]

const array=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a-b;
    },

];
let first=array[0];
let second=array[1];
let third=array[2];
console.log(first(2,3)); // Output: 5
console.log(second(2,3)); // Output: 6
console.log(third(2,3)); // Output: -1

//Reduce
let ansArr2=brr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(ansArr2); // Output: 55

