console.log("JavaScript Mastery");
console.log("Work Hard Till YOu Not Succeed");
//alert("Work Harder Ashish");
//Addtion of Two Number
// let a=prompt("Enter The NUmber");
// let b=prompt("Enter the Second Number");
//console.log(a+b);
//Variable
let a=0;
let b=9;
//console.log(a+b);
//dataType
//1. Primitive 2.  Non-Primitive
//number String Undefined Null Boolean BigInt Symbol
//Object
// const Student = {
//     name: "Ashish",
//     age: 23,
//     cgpa: 7.3,
//     isPass: true
// };
//Type Conversion
// let res=3;
// console.log(res);
// console.log(typeof res);
// //function
// function fun()
// {
//     console.log("This is the Function Named Fun()");
//     fun1(a,b)
// }
// function fun1(a,b)
// {
//     console.log("This is the Function Named Fun1()");
//     console.log(a+b);
//     fun2(a,b)
// }
// const fun2 = (a,b)=>{
//     console.log("This is the Function Named Fun2() with Arrow ");
//     console.log(a+b);
//     fun3(a,b)
// }
// const fun3 = (a,b)=>{
//     console.log("This is the Function Named Fun3()");
//     console.log(a+b);
    
// }

// function name(a)
// {
//     console.log("This is the function Named Name");
//     console.log("hello "+a);
// }

// // fun();
// // name("Ashish")

// const add=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(add(4,5));

// //Addtion In Function 

// const sun = function(temp,temp1){
//     console.log(temp*temp1);
//     console.log("Advanced Function");
// }
// sun(3,6);

// (function(){
//     console.log("Ashish Time Lagaa Aur bathe phir Deekh");
// })();

// console.log("Start Kar Rha hu Array Se ");
// console.log("Ab Option Nhi hai Bhai Kro Ab Bahut amain katt li ab nbatho");

// let name=["ashish ","Ayush" ,"Harshit"];
// console.log(name);

// name.push("Vishal");
// console.log(name);

// name.pop();
// console.log(name);

// let name2=["Sharma"];
// name.concat(name2);

// name.unshift("Hello");
// console.log(name);

// name.shift("Kaam KAro");
// console.log(name);

// name.slice(2,4);
// console.log(name);

// name.splice(0,2,"hh");
// console.log(name);


 let num=[1,2,3,4,5,6,7,8];
 let num2=[2,3,2,3,23,2,1,2];


// for(let i=0;i<num.length;i++)
// {
//     console.log(num[i]);
// }

// //forEach loop

// num.forEach((val,ind,arr)=>{
//     console.log("Index "+ind+"   value"+val+"    Array"+arr);
// })

// //map Method

// let newarr=num.map((val)=>{
//     return val*4;
// })
// console.log(newarr);


// console.log(num.concat(num2));
// //console.log(num2.sort());
// console.log(num2.reverse());

// console.log("For of Loop");
// for(let arr of num2)
// {
//     console.log(arr);
// }
// console.log("For in Loop");

// for(let arr in num2)
// {
//     console.log(arr);
// }

// //Multidimensional Array

// let mat=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i=0;i<mat.length;i++)
// {
//     for(let j=0;j<mat[i].length;j++)
//     {
//         console.log(mat[i][j]);
//     }
// }

// for(let ar of mat)
// {
//     for(let arr of ar)
//     {
//         console.log(arr);

//     }
// }

// mat.forEach((val,ind,mat)=>{
//     val.forEach(data=>{
//         console.log(data);
//     })
// })


// //Spread
// let  arr1 = ["ashish",21,"Sharma"];
// let arr2=arr1.slice(0).concat(["Work Hard"]);
// console.log(arr1);
// console.log(arr2);

// //copy
// let temp1=[...arr1];
// console.log("Copy Array "+temp1);

// //Array Destruction

// let [i1,i2 , ...i3]=arr1;
// console.log("Array Destruction"+i1+" "+i2+" "+i3);

console.log("Object")

let obj={
    name:"Ashish",
    Work: "kaam Karo",
    age:21,
    fun:function(){
        console.log("Buss Bhai kamm karte rahoo");
    },
    arr:[2,3,2,13,2]
}
console.log("Object  "+obj.name);g

// for(let i=1;i<6;i++)
// {
//     debugger;
//     console.log(i);
// }


console.log("Set in JS");

const s = new Set([10,2,1,3,0,43]);
s.add(77);
console.log(s)














