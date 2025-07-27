// console.log("Hello World");
// console.log("Stay consistent and keep learning!");

// let name = "John";
// let age = 30;
// let isStudent = true; 
// console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

// const PI = 3.14;
// console.log(`PI: ${PI}`);

// let x=10;
// var y=20;
// const z=30;
// console.log(`x: ${x}, y: ${y}, z: ${z}`);

// if(true)
// {
//     var y=999;
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// else
// {
//     console.log("else block");
// }

// {
//     var aa=100;
// }
// console.log(aa);
//Data Types

//primitives Data Types

// let name = "John"; // String
// let age = 30; // Number
// let isStudent = true; // Boolean
// let height = null; // Null
// let weight; // Undefined
// let symbol = Symbol("unique"); // Symbol
// let bigIntValue = BigInt(123456789012345678901234567890);

// console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}, Height: ${height}, Weight: ${weight}, Symbol: ${symbol.toString()}, BigInt: ${bigIntValue}`);
// // Non-primitive Data Types
// let person = {
//     name: "John",
//     age: 30,
//     isStudent: true
// }; // Object
// let fruits = ["apple", "banana", "orange"]; // Array
// let person2 = person; // Reference to the same object   
// console.log(`Person: ${JSON.stringify(person)}, Fruits: ${fruits}, Person2: ${JSON.stringify(person2)}`);

// operators & conditionals
// Arithmetic Operators
let a = 10;
let b = 5;
// let sum = a + b; // Addition
// let difference = a - b; // Subtraction
// let product = a * b; // Multiplication
// let quotient = a / b; // Division
// let remainder = a % b; // Modulus
// console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}`);

// Comparison Operators
// let isEqual = (a == b); // Equal to
// let isStrictEqual = (a === b); // Strict equal to
// let isNotEqual = (a != b); // Not equal to
// let isStrictNotEqual = (a !== b); // Strict not equal to    
// let isGreater = (a > b); // Greater than
// let isLess = (a < b); // Less than
// let isGreaterOrEqual = (a >= b); // Greater than or equal to
// let isLessOrEqual = (a <= b); // Less than or equal to
// console.log(`Is Equal: ${isEqual}, Is Strictly Equal: ${isStrictEqual}, Is Not Equal: ${isNotEqual}, Is Strictly Not Equal: ${isStrictNotEqual}, Is Greater: ${isGreater}, Is Less: ${isLess}, Is Greater or Equal: ${isGreaterOrEqual}, Is Less or Equal: ${isLessOrEqual}`);

// // Logical Operators
// let x = true;
// let y = false;

// let andResult = (x && y); // Logical AND
// let orResult = (x || y); // Logical OR  
// let notResult = (!x); // Logical NOT
// console.log(`AND Result: ${andResult}, OR Result: ${orResult}, NOT Result: ${notResult}`);  

// // Conditional Statements
// let number = 10;

// if (number > 0) {
//     console.log("Number is positive");
// }
// else if (number < 0) {
//     console.log("Number is negative");
// } else {
//     console.log("Number is zero");
// }

// // Ternary Operator
// let result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
// console.log(`Ternary Result: ${result}`);   

// // Switch Statement
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // Loops
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//     console.log(`Iteration: ${i}`);
// }   
// // While Loop
// let j = 1;
// while (j <= 5) {
//     console.log(`While Loop Iteration: ${j}`);
//     j++;
// }
// // Do-While Loop
// let k = 1;
// do {
//     console.log(`Do-While Loop Iteration: ${k}`);
//     k++;
// } while (k <= 5);

// For Loop with Array
// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`For Loop Array: ${numbers[i]}`);
// }
// // For...of Loop
// for (let number of numbers) {
//     console.log(`For...of Loop Array: ${number}`);
// }
// // For...in Loop
// for (let index in numbers) {
//     console.log(`For...in Loop Array: ${numbers[index]}`);
// }
//String 

let name = "Ashish";
console.log(`Name: ${name}`);

// let message ="hello";
// console.log(`${message} ${name}`);
// console.log(`Length of name: ${name.length}`);
// console.log(`Uppercase: ${name.toUpperCase()}`);
// console.log(`Lowercase: ${name.toLowerCase()}`);
// console.log(`Substring: ${name.substring(0, 3)}`);
// console.log(`Index of 's': ${name.indexOf('s')}`);
// console.log(`Last Index of 's': ${name.lastIndexOf('s')}`);
// console.log(`Replace 's' with 'z': ${name.replace('s', 'z')}`);
// console.log(`Split by 's': ${name.split('s')}`);
// console.log(`Trimmed Name: ${name.trim()}`);
// console.log(`Starts with 'A': ${name.startsWith('A')}`);
// console.log(`Ends with 'h': ${name.endsWith('h')}`);
// console.log(`Includes 'shi': ${name.includes('shi')}`);
// console.log(`Repeat 3 times: ${name.repeat(3)}`);

// Template Literals
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// // String Methods
// let str = "Hello, World!";
// console.log(`Original String: ${str}`);
// console.log(`Length: ${str.length}`);
// console.log(`Uppercase: ${str.toUpperCase()}`);
// console.log(`Lowercase: ${str.toLowerCase()}`);
// // console.log(`Substring (0, 5): ${str.substring(0, 5)}`);
// // console.log(`Index of 'o': ${str.indexOf('o')}`);    

// let firstName = "John";
// let lastName = "Doe";
// let full=firstName + " " + lastName;
// console.log(`Full Name: ${full}`);
// let fullName = `${firstName} ${lastName}`;
// console.log(`Full Name: ${fullName}`);