

var number1 = 1;
let number2 = 2;

function doSomethingVar() {
    // In JS a variables declared with the var keyword is scoped with the nearest function
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    // i still in scope due to declaration with var (i = 5)
    console.log('Finally: ' + i);
}
doSomethingVar();

function doSomethingLet() {
    // In JS a variables declared with the let keyword is scoped with the nearest block (like most languages)
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // i is not in scope, so compilation error (will see red squigly in IDE)
    console.log('Finally: ' + i);
}

doSomethingLet();

