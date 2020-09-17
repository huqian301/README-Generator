const fs = require("fs");
const inquirer = require("inquirer");
const api = require('./utils/api.js')
const markdown = require('./utils/generateMarkdown.js')

const questions = [
  {
    type: 'input',
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: 'checkbox',
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: 'input',
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: 'input',
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: 'input',
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: 'input',
    name: "contribute",
    message: "What does the user need to know about contributing to the repo?",
  }

];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data);
}


function init() {
  //prompt all the questions
  inquirer
    .prompt(questions)
    .then(res => {
      console.log(res);

      api
        .getUser(res.username)
        .then(({ data }) => {
          writeToFile("README.md", markdown({ ...res, ...data }));
        });
    })
}

init();

