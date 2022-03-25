
// js
let log = function(message) {
    console.log(message);
}

// ts - arrow function (in C# called a lambda function)
//      can exclude curly brace if only one line
//      can exclude parenthesis if only one parameter
let doLog = (message) => {
    console.log(message);
}

// ts - arrow function no params
let doLog2 = () => {
    console.log('message');
}