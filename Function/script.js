//Function In JavaScript
// function message() {
//     console.log("Hello, World!");
// }
// message();


// function greet(name){
//     console.log("Hello, " + name + "!");
// }
// greet("John");
// // greet("Alice");
// // greet("Bob");
// // greet("Eva");
// function add(a, b) {
//     return a + b;
// }
// console.log("Sum of two Number" + " " + add(5, 3)); // Output: 8

// function fun(a , b)
// {
//     if(a > b)
//         a=(a - b);
//     else
//         b=(a + b);
//     return (a, b);
// }
// console.log(fun(5, 3)); // Output: 8
// console.log(fun(2, 4)); // Output: 6


//function 1

function sayMyName()
{
    console.log("Ashish");
}
sayMyName(); // Output: Ashish


//function 2

// function countToTen()
// {
//     for(let i = 1; i <= 10; i++)
//     {
//         console.log(i);
//     }
// }   
// countToTen(); // Output: 1 2 3 4 5 6 7 8 9 10


//function 3

// function PrintEvenNumbers()
// {
//     for(let i = 1; i <= 20; i++)
//     {
//         if(i % 2 === 0)
//         {
//             console.log(i);
//         }
//     }
// }

// PrintEvenNumbers(); // Output: 2 4 6 8 10 12 14 16 18 20

//function 4

function getAvg(a, b, c)
{
    let sum = a + b + c;
    let avg = sum / 3;
    return avg;
}
console.log(getAvg(10, 20, 30)); // Output: 20


//function 5

function getName()
{
    return "Ashish";
}
console.log(getName()); // Output: Ashish

//function 6

// function getFullName(firstName, lastName)
// {
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }
// console.log(getFullName("Ashish", "Sharma")); 
// // Output: Ashish Sharma

// //function 7
// function get(firstName, lastName)
// {
//     return firstName + " " + lastName;
// }
// console.log(get("Ashish", "Sharma"));

// Output: Ashish Sharma

// let answer = getSum(5, 10);
// console.log(answer); // Output: 15

let multiply = function(a, b) {
    return a * b;
}
console.log(multiply(5, 10)); // Output: 50

// let nameste = function() {
//     console.log("Hello, World!");
// }
// nameste(); // Output: Hello, World!

// let add = function(a, b) {
//     return a + b;
// }

// console.log(add(5, 10)); // Output: 15
// let subtract = function(a, b) {
//     return a - b;
// }   
// console.log(subtract(10, 5)); // Output: 5

// let divide = function(a, b) {
//     return a / b;
// }
// console.log(divide(10, 2)); // Output: 5
// let modulus = function(a, b) {
//     return a % b;
// }
// console.log(modulus(10, 3)); // Output: 1


// let ans=function(a,b){
//     return a + b;
// }

// console.log(ans(5, 10)); // Output: 15

// const multiplyNumbers = function(a, b) {
//     return a * b;
// }
// console.log(multiplyNumbers(5, 10)); // Output: 50
console.log("End of Function/script.js");

