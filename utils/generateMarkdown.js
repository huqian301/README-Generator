function licenseBadge(license,username){
  if (license !== "None") {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
  return `[![built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/${username}/)`
}

function license(license) {
  if (license !== "None") {
    return (
      `This project is licensed under the ${license} license.`
    )
  }
  return 'None'
}

function generateMarkdown(data) {
  const profilePicture = `http://github.com/${data.username}.png?size=100`;
  const githubProfile =`https://github.com/${data.username}`;

  return `
# ${data.title}

# Developer Profile
Username: ${data.username}<br>
![profilePicture](${profilePicture})<br>
Github link: ${githubProfile}

# Project description
${data.description}

## Table of Contents 
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution guidelines](#contribution-guidelines)
* [Questions](#questions)


## License
${licenseBadge(data.license, data.username)}<br>
${license(data.license)}


## Installation
\`\`\`bash
${data.installation}
\`\`\`

## Usage
\`\`\`
${data.usage}
\`\`\`


## Contribution guidelines
${data.contributing}

## Tests instruction
\`\`\`bash
${data.test}
\`\`\`

##Questions
If you have any questions about the repo, open an issue or contact me directly.<br>
You can find my work at ${githubProfile}.

`;
}

module.exports = generateMarkdown;


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README