// TODO: Include packages needed for this application
const inquierer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Write installation instructions for your project",
        name: "install",
    },
    {
        type: "input",
        message: "Write any usage information the user may need to know",
        name: "usage",
    },
    {
        type: "list",
        message: "Which license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Apache License v2.0",
            "GNU General Public License v3.0",
            "None",
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error){
        if (error) {
            return console.log(error)
        }
        console.log("success")
    });
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
