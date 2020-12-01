const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const md = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        // WHEN I enter my project title, THEN this is displayed as the title of the README
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions)
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => { 
        if (err) {
            console.log(err);
        }
    });
};

// function to initialize program
const init = async () => {
    try {
        const answers = await promptUser();
        const readme = md.generateMarkdown(answers);
        await writeToFile('sample.md', readme);
        // console.log('Successfully wrote to readme.md');
    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();

/*
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
*/