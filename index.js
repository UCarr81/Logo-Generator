const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Rectangle, Star, Shield} = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        message: 'Please Input 1-3 Characters',
        name: 'letters'
    },
    {
        type: 'list',
        message: 'PLease select a shape for your logo',
        name: 'shapes',
        choices: [
            { name: 'Circle', value: 'circle'},
            { name: 'Triangle', value: 'triangle'},
            { name: 'Square', value: 'square'},
            { name: 'Rectangle', value: 'rectangle'},
            { name: 'Shield', value: 'shield'},
            { name: 'Star', value: 'star'}
        ],
    },
    {
        type: 'confirm',
        message: 'Do you have a shape color code ready? (YES/NO)',
        name: 'includeColor',
        default: true,
      },
      {
        type: 'input',
        message: 'Enter the shape color (keyword or hexadecimal):',
        name: 'shapeColor',
        when: (answers) => answers.includeColor,
      },
      {
        type: 'list',
        message: 'Select the shape color',
        name: 'defaultShapeColor',
        choices: ['Red', 'Blue', 'Yellow', 'Green', 'Black', 'White'],
        when: (answers) => !answers.includeColor,
      },
      {
        type: 'confirm', 
        message: 'Do you have a shape outline color code ready? (YES/NO)',
        name: 'includeOutlineShapeColor',
        default: true,
      },
      {
        type: 'input',
        message: 'Enter the shape outline color (keyword or hexadecimal):',
        name: 'outlineShapeColor',
        when: (answers) => answers.includeOutlineShapeColor,
      },
      {
        type: 'list',
        message: 'Select the outline shape color',
        name: 'outlineShapeColorList',
        choices: ['Red', 'Blue', 'Yellow', 'Green', 'Black', 'White'],
        when: (answers) => !answers.includeOutlineShapeColor,
      },
      {
        type: 'confirm',
        message: 'Do you have a text color code ready? (YES/NO)',
        name: 'includeTextColor',
        default: true,
      },
      {
        type: 'input',
        message: 'Enter the text color (keyword or hexadecimal):',
        name: 'textColor',
        when: (answers) => answers.includeTextColor,
      },
      {
        type: 'list',
        message: 'Select the text color',
        name: 'defaulttextColor',
        choices: ['Red', 'Blue', 'Yellow', 'Green', 'Black', 'White'],
        when: (answers) => !answers.includeTextColor,
      },
]

function generateLogo(answers) {
  let shape;

  switch (answers.shapes) {
    case 'circle':
      shape = new Circle(answers.shapeColor || answers.defaultShapeColor, answers.letters, answers.textColor || answers.defaulttextColor, answers.outlineShapeColor || answers.outlineShapeColorList);
      break;
    case 'square':
      shape = new Square(answers.shapeColor || answers.defaultShapeColor, answers.letters, answers.textColor || answers.defaulttextColor, answers.outlineShapeColor || answers.outlineShapeColorList); 
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor || answers.defaultShapeColor, answers.letters, answers.textColor || answers.defaulttextColor, answers.outlineShapeColor || answers.outlineShapeColorList); 
      break;
    case 'rectangle':
      shape = new Rectangle(answers.shapeColor || answers.defaultShapeColor, answers.letters, answers.textColor || answers.defaulttextColor, answers.outlineShapeColor || answers.outlineShapeColorList);
      break;
    case 'shield':
      shape = new Shield(answers.shapeColor || answers.defaultShapeColor, answers.letters, answers.textColor || answers.defaulttextColor, answers.outlineShapeColor || answers.outlineShapeColorList);
      break;
    case 'star':
      shape = new Star(answers.shapeColor || answers.defaultShapeColor, answers.letters, answers.textColor || answers.defaulttextColor, answers.outlineShapeColor || answers.outlineShapeColorList);
      break;
      
      
      default:
      console.error('Invalid shape selection');
      return;
  }

  const svgString = shape.render();

  fs.writeFileSync('logo.svg', svgString);
  console.log('Generated logo.svg');
}

inquirer.prompt(questions).then((answers) => {
  generateLogo(answers);
});
