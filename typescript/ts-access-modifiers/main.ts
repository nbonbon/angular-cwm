class Point {
    constructor(private x?: number, private y?: number) {
    }
    
    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    }
}

// How to change implementation such that once initialized a points x/y values cannot be changed?
let point = new Point(1, 2);
point.draw();

// when private the below is not accessible
// point.x =1;