class Shapes {
    constructor(shapeColor, letters, textColor) {
        this.shapeColor = shapeColor;
        this.letters = letters;
        this.textColor = textColor;
    }
}

class Circle extends Shapes {
    constructor(shapeColor, letters, textColor) {
        super(shapeColor, letters, textColor);
    }
    //https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
        </svg>`;
    }
}

class Square extends Shapes {
    constructor(shapeColor, letters, textColor) {
        super(shapeColor, letters, textColor);
    }
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="250">
            <rect x="50" y="50" width="200" height="150" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>
            <text x="150" y="150" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
        </svg>`;
    }
}
class Triangle extends Shapes {
    constructor(shapeColor, letters, textColor) {
        super(shapeColor, letters, textColor);
    }
    render() {
        return `
        <svg version="1.1"
        width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 275,190 25,190" fill="${this.shapeColor}" stroke="black" stroke-width="5" />
            <text x="150" y="120" font-size="70" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.letters}</text>
          </svg>`;
    }
}

class Rectangle extends Shapes {
    constructor(shapeColor, letters, textColor) {
        super(shapeColor, letters, textColor);
    }
    render() {
        return `
        <svg version="1.1"
width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="${this.shapeColor}" stroke="black" stroke-width="5" />
    <text x="150" y="100" font-size="70" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.letters}</text>
  </svg>`;
    }
}

class Shield extends Shapes {
    constructor(shapeColor, letters, textColor) {
        super(shapeColor, letters, textColor);
    }
    render() {
        return `
        <svg version="1.1"
width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,10 Q50,40 150,10 Q250,40 250,10 L250,150 Q250,190 150,200 Q50,190 50,150 Z" fill="${this.shapeColor}" stroke="black" stroke-width="5" />
    <text x="150" y="100" font-size="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.letters}</text>
  </svg>`;
    }
}

module.exports = { Circle, Square, Triangle, Rectangle, Shield, Shapes };

