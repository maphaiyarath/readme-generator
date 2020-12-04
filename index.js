const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const md = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project need?',
        choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Are there any guidelines to contributing to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any test instructions your project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the best email to reach you?'
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
        console.log('Successfully wrote to sample.md');
    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();

/*
THEN a badge for that license is added near the top of the README
*/