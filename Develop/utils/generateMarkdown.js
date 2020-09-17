function generateMarkdown(data) {
  return `
# ${data.title}

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


// * At least one badge
// [![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/${username}/)

`;
}

module.exports = generateMarkdown;
