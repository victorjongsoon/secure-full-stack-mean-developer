/*
// ReferenceError: Cannot access 'n' before initialization
// This is because of the hoisting concept in JS 
let total = 0;
print(); // // ReferenceError: Cannot access 'n' before initialization
let n = 1; 
function print(){
    total = n * 10;
    console.log("Total:",total);
}
*/

/* solution 1
let total = 0;

let n = 1; // Initialize 'n'

print(); // Now it works

function print(){
    total = n * 10;
    console.log("Total:", total);
}
*/

/* solution 2
// using seTimeout
let total = 0;
setTimeout(print, 0); // Now it works
let n = 1; // Initialize 'n'
function print(){
    total = n * 10;
    console.log("Total:", total);
}
*/

/* solution 3
// using setImmediate
let total = 0;
setTimeout(print1, 0); // Now it works
setImmediate(print2, 0); // runs first
let n = 1;

function print1(){
    total = n * 10;
    console.log("Total 1:", total);
    n++;
}

function print2(){
    total = n * 10;
    console.log("Total 2:", total);
    n++;
}   
*/

// I/O Cycle
let fs = require("fs");

let total = 0;

// simulate reading data from file
fs.readFile("./index.js", () => {
    setTimeout(print1, 0); // Now it works
    setImmediate(print2, 0); // runs first
});

let n = 1;

function print1(){
    total = n * 10;
    console.log("Total 1:", total);
    n++;
}

function print2(){
    total = n * 10;
    console.log("Total 2:", total);
    n++;
}   