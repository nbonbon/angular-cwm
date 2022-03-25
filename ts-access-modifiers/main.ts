class Point {
    private x: number; 
    private y: number; 

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    
    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    }
}

// How to change implementation such that once initialized a points x/y values cannot be changed?
let point = new Point(1, 2);
point.draw();