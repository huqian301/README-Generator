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
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })

  //using promises
  .then(async ({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    try {
      const { data } = await axios.get(queryUrl);
      const repoNames = data.map(repo => repo.name).join('\n');
      
      fs.writeFile('repos.txt', repoNames, err => {
        if (err) throw err;
        console.log('successfully created repos.txt');
      });

      } catch (e) {
        console.log(e);
      }
    });
