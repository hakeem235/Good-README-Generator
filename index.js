// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter any installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information",
        name: "usage"
    },
    {
        type: "checkbox",
        name: "licenseName",
        message: "Choose your license name",
        choices: [
            "MIT License",
            "GPL License",
            "Public Domain (Unlicense)"
        ]
    },
    {
        type: "input",
        message: "Enter contribution guidelines",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "test"
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "email"
    },
    {
        type: "input",
        message: "Enter any credits ",
        name: "credits"
    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // TODO: Create a function to initialize app
    function init() {

    }

    // Function call to initialize app
    init();
