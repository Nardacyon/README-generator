const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");
const promiseWriteFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const licenseBadgeJSON = "./JSON/licenses.json";

// array of questions for user

// function promptUser() {


// }

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    const licenseChoices = Object.keys(JSON.parse(await readFile(licenseBadgeJSON, 'utf8')));
    const questions = ([
        // {
        //     type: "input",
        //     name: "badge",
        //     message: "What is your project called?\n"
        // },
        {
            // type: "input",
            name: "title",
            message: "What is your project called?\n"
        },
        {
            // type: "input",
            name: "description",
            message: "Give a description of what your project does:\n"
        },
        // {
        //     type: "input",
        //     name: "table of contents",
        //     message: "What is your project called?\n"
        // },
        {
            name: "screenshot",
            message: "Provide a file path for a screenshot or demo of your project (optional, but recommended):\n"
        },
        {
            // type: "input",
            name: "installation",
            message: "Give installation details:\n"
        },
        {
            // type: "input",
            name: "usage",
            message: "How do you use the the app?\n"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your project:\n",
            choices: licenseChoices
        },
        {
            // type: "input",
            name: "contributing",
            message: "Who contributed to your project?\n"
        },
        {
            // type: "input",
            name: "test",
            message: "Enter tests others can run on the project: (Enter N/A if there are none) \n"
        },
        {
            // type: "input",
            name: "username",
            message: "What is your Github Username\n"
        }
    ]);
    try {
        console.log("-----------------------\n")
        const data = await inquirer.prompt(questions);

        const readMe = await generateMarkdown(data);

        await promiseWriteFile("./example-README/READMe.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
        console.log('lol didnt work ;P')
    }

}

// function call to initialize program
init();
