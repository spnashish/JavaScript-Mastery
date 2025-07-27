console.log("Introduction to Clone");
console.log("Clone is a process of copying an object or a part of an object to a new location.");

//Spread Operator
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
let newObj = {...obj};
console.log("Spread Operator",obj);
console.log("New Object is:", newObj);  


//Object.assign
let obj1 = {
    name: "John",
    age: 30,
    city: "New York"
};
let obj2 = Object.assign({}, obj1);
console.log("Object.assign",obj1);
console.log("New Object is:", obj2);

//JSON.parse(JSON.stringify(obj))
let obj3 = {
    name: "John",
    age: 30,
    city: "New York"
};
let obj4 = JSON.parse(JSON.stringify(obj3));
console.log("JSON.parse(JSON.stringify(obj))",obj3);
console.log("New Object is:", obj4);

//iteration
let obj5 = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in obj5) {
    console.log(key, obj5[key]);
}


//Garbage Collector
let obj6 = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("Garbage Collector",obj6);
delete obj6.name;
console.log("Garbage Collector",obj6);  
