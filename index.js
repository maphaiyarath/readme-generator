const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const md = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your app:'
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