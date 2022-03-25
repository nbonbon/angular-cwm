// IDE recognizes the type as 'number'
var count = 5;
// perfectly fine in js but in ts IDE / compilation complains that 
// 'string' is not assignable to type 'Number'
// WILL still compile into valid js code (will change let to var due to transpilation to ES5)
count = 'a';
// IDE recognizes the type as 'any'
var a;
// IDE and tsc fine with this
a = 1;
a = true;
a = 'a';
// Solution to the above type annotations
var b;
b = 1;
// Now IDE /  tsc complains about this
b = true;
b = 'b';
