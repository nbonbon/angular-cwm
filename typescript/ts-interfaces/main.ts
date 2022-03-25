
// A lot of parameters
// BAD FORM - should instead pass in an object
let drawPoint1 = (x, y, a, b, c, d, e) => {
    //...
}

let drawPoint2 = (point) => {
    //...
}

drawPoint2({
    x: 1,
    y: 2,
    /* ... */
});

// problem - this is valid and no compile time error, will break at runtime
drawPoint2({
    name: 'Nick'
});

// solution 1 - inline annotation
//      VERY VERBOSE
//      Don't want to have to repeat this object literal in all places we may pass in a point
let drawPoint3 = (point: {x: number, y: number, /**/}) => {
    //...
}

// solution 2 - interface
//      Should use Pascal naming convention
interface Point {
    x: number, 
    y: number
}

let drawPoint4 = (point: Point) => {
    //...
}