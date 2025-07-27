console.log("Introduction to Error Handling");

const myFunction = () => {
    console.log("This is myFunction");
    throw new Error("This is my error");
    console.log("This will not be executed");
}   

try {
    myFunction();
    console.log("This will not be executed");
} catch (error) {
    console.log(error.message);
}
console.log("This will be executed");

