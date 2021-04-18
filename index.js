// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown.js');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'Title',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'Please provide a short description of the project',
    name: 'Description',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'Table of Contents',
    name: 'Table of Contents',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'What are the steps to install the application?',
    name: 'Installation',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'How to use the application?',
    name: 'Usage',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'list',
    message: 'Please choose License for your application',
    name: 'License',
    choices: ['N/A', 'The MIT License', 'The GNU GPL v2 License', 'Apache License', 'GNU GPL v3 License'],
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'Who contributed to the project?',
    name: 'Contributing',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'What are steps to test the application?',
    name: 'Tests',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'for more information please email me on ',
    name: 'Questions',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'GitHub',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Your README file has been generated!')
  );
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      writeToFile('./readme_file/README.md', generator(data));
    })
}

// Function call to initialize app
init();