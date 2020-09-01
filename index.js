const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const promiseWriteFile = util.promisify(fs.writeFile);


// array of questions for user

function promptUser() {
    return inquirer.prompt ([
        // {
        //     type: "input",
        //     name: "badge",
        //     message: "What is your project called?"
        // },
        {
            type: "input",
            name: "title",
            message: "What is your project called?"
        },
        {
            type: "input",
            name: "description",
            message: "Give a description of what your project does"
        },
        // {
        //     type: "input",
        //     name: "table of contents",
        //     message: "What is your project called?"
        // },
        {
            type: "input",
            name: "installation",
            message: "Give installation details"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use the the app?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose a license for your project",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to your project?"
        },
        {
            type: "input",
            name: "test",
            message: "Enter tests others can run on the project"
        },
        {
            type: "input",
            name: "username",
            message: "How can people contact you for questions?"
        }
    ]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    try {
        const response = await promptUser();

        const readMe = await generateMarkdown(response);

        await promiseWriteFile("./example-README/READMe.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
        console.log('lol didnt work ;P')
    }

}

// function call to initialize program
init();
