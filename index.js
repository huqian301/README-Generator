// prompted for their GitHub username

//will be used to make a call to the GitHub API to retrieve their email and profile image

// then be prompted with questions about their project
// * At least one badge

// [![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/${username}/)

// * Project title

// * Description


// * Table of Contents
// ## Table of Contents 
// * [Description](#description)
// * [View](#view)
// * [Usage](#usage)
// * [Project Status](#project-status)
// * [Built With](#built-with)
// * [Credits](#credits)
// * [License](#license)


// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email

const fs = require("fs");
const inquirer = require("inquirer");
const api = require('./utils/api.js')
const markdown = require('./utils/generateMarkdown.js')

const questions = [
  {
    type: 'input',
    name:"username",
    message:"What is your GitHub username?",
  },
  {
    type: 'input',
    name:"title",
    message:"What is your project's name?",
  },
  {
    type: 'input',
    name:"description",
    message:"Please write a short description of your project.",
  },
  {
    type: 'checkbox',
    name:"license",
    message:"What kind of license should your project have?",
    choices:["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: 'input',
    name:"installation",
    message:"What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: 'input',
    name:"test",
    message:"What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: 'input',
    name:"usage",
    message:"What does the user need to know about using the repo?",
  },
  {
    type: 'input',
    name:"contribute",
    message:"What does the user need to know about contributing to the repo?",
  }

]




  //using promises
  // .then(async ({ username }) => {
  //   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  //   try {
  //     const { data } = await axios.get(queryUrl);
  //     const repoNames = data.map(repo => repo.name).join('\n');

  //     fs.writeFile('repos.txt', repoNames, err => {
  //       if (err) throw err;
  //       console.log('successfully created repos.txt');
  //     });

  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
