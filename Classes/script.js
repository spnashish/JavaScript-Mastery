console.log("Introduction to the Classes in JavaScript");

// class Person {
//     name="Ashish";
//     age=23;
//     #wt=2;
//     walk(){
//         console.log("I am walking",this.#wt);
//     }
//     sing(){
//         console.log("I am singing");
//     }
//     eat(){
//         console.log("I am eating");
//     }
//     getwt()
//     {
//         return this.#wt;
//     }
//     setwt(wt)
//     {
//         this.#wt=wt;
//     }

// }
// let obj = new Person();
// console.log(obj.name);
// console.log(obj.age);
// obj.walk();
// obj.sing();
// obj.eat();
// obj.getwt();
// obj.setwt(3);
// console.log(obj.getwt());

// //Constructor

// class Student{
//     name;
//     age;
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     study(){
//         console.log(this.name,"is studying");
//     }
//     getAge(){
//         return this.age;
//     }
//     setAge(age){
//         this.age=age;
//     }
//     getname(){
//         return this.name;
//     }
//     setname(name){
//         this.name=name;
//     }
// }

// // Usage of Student class outside the class definition
// let ob = new Student("Ashish",23);
// console.log(ob.name);
// console.log(ob.age);
// ob.study();
// console.log(ob.getAge());
// ob.setAge(21);
// console.log(ob.getAge());
// console.log(ob.getname());
// ob.setname("blt");
// console.log(ob.getname());

// //default parameter
// function fun(a,b=10){
//     return a+b;
// }
// console.log(fun(10));
// console.log(fun(10,20));

// //default constructor

// class Student1{
//     name;
//     age;
//     constructor(name="Ashish",age=23){
//         this.name=name;
//         this.age=age;
//     }
//     study(){
//         console.log(this.name,"is studying");
//     }
//     getAge(){
//         return this.age;
//     }
//     setAge(age){
//         this.age=age;
//     }
//     getname(){
//         return this.name;
//     }
//     setname(name){
//         this.name=name;
//     }
// }


//Math Object 

// console.log(Math.PI);
// console.log(Math.ceil(1.2));
// console.log(Math.floor(1.2));
// console.log(Math.round(1.2));
// console.log(Math.random());
// console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
// console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));
// console.log(Math.abs(-10));
// console.log(Math.sin(0));
// console.log(Math.cos(0));
// console.log(Math.tan(0));
// console.log(Math.asin(0));
// console.log(Math.acos(0));
// console.log(Math.atan(0));
// console.log(Math.log(10));
// console.log(Math.log2(10));
// console.log(Math.log10(10));
// console.log(Math.log1p(10));
// console.log(Math.expm1(10));
// console.log(Math.cosh(10));
// console.log(Math.sinh(10));
// console.log(Math.tanh(10));
// console.log(Math.acosh(10));
// console.log(Math.asinh(10));
// console.log(Math.atanh(10));
// console.log(Math.exp(10));
// console.log(Math.log1p(10));
// console.log(Math.log2(10));

//Date Object

// console.log(new Date());
// console.log(new Date().getTime());
// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
// console.log(new Date().getSeconds());
// console.log(new Date().getMilliseconds());
// console.log(new Date().getDay());
// console.log(new Date().getMonth());
// console.log(new Date().getFullYear());
// console.log(new Date().getUTCDate());
// console.log(new Date().getUTCHours());
// console.log(new Date().getUTCMinutes());
// console.log(new Date().getUTCSeconds());
// console.log(new Date().getUTCMilliseconds());
// console.log(new Date().getUTCDay());
// console.log(new Date().getUTCMonth());
// console.log(new Date().getUTCFullYear());
// console.log(new Date().setDate(10));
// console.log(new Date().setHours(10));
// console.log(new Date().setMinutes(1));







//Object Cloning

// Object Cloning

const personal = {
    name: "Ashish",
    age: 23,
    wt: 2,
    walk() {
        console.log("I am walking", this.wt);
    },
    sing() {
        console.log("I am singing");
    },
    eat() {
        console.log("I am eating");
    },
    getwt() {
        return this.wt;
    },
    setwt(wt) {
        this.wt = wt;
    }
};

const clone = Object.assign({}, personal);
console.log(clone);

