const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Sqaure } = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        message: 'Please Input 1-3 Letters',
        name: 'letters'
    },
    {
        type: 'list',
        message: 'PLease select a shape for your logo',
        name: 'shapes',
        choices: [
            { name: 'Circle', value: 'circle'},
            { name: 'Triangle', value: 'triangle'},
            { name: 'Square', value: 'square'}
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
        choices: ['Red', 'Blue', 'Yellow', 'Green'],
        when: (answers) => !answers.includeColor,
      }
]