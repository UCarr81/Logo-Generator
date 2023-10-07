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

module.exports = { Circle, Shapes };

