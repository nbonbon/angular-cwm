// IDE recognizes the type as 'number'
let count = 5;

// perfectly fine in js but in ts IDE / compilation complains that 
// 'string' is not assignable to type 'Number'
// WILL still compile into valid js code (will change let to var due to transpilation to ES5)
count = 'a';

// IDE recognizes the type as 'any'
let a;

// IDE and tsc fine with this
a = 1;
a = true;
a = 'a';

// Solution to the above type annotations
let b: number;
b = 1;

// Now IDE /  tsc complains about this (but still compiles into main.js)
b = true;
b = 'b';

// ts types
let c: number; // integer or floating points
let d: boolean; // true or false
let e: string;
let f: any;
let g: number[]; // arrays
let h: number[] = [1, 2, 3]; // array with initialization
let i: any[] = [1, true, 'a', false];

// enums

//  instead of:
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

//  can do this:

// first element auto gets value 0, but best practice to set them
// for when someone comes and adds one which would change all their values
enum Color { Red = 0, Green = 2, Blue = 3 }; 
let backgroundColor = Color.Blue;
