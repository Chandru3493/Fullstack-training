class Shape {
  constructor(colour = "Transparent") {
    this.colour = colour;
    this.type = "Shape";
  }

  describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}

class Square extends Shape {
  constructor(colour, sideLength) {
    super(colour);
    this.sideLength = sideLength;
    this.type = "Square";
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(colour, width, height) {
    super(colour);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }

  area() {
    return this.width * this.height;
  }
}

const square = new Square("red", 10);
const rectangle = new Rectangle("yellow", 15, 20);
console.log(square.area());
console.log(rectangle.area());
for (const shape of [square, rectangle]) shape.describe();
