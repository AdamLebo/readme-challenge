// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return `<a href="https://opensource.org/licenses/MIT" target="_blank">here</a>`;
    case 'Apache License 2.0':
      return `<a href="https://opensource.org/licenses/Apache-2.0" target="_blank">here</a>`;
    case 'GNU GPLv3':
      return `<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank">here</a>`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Install Instructions](#install-instructions)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Questions](#questions)

  ## Description  
    ${data.description}

  ## Install Instructions
    ${data.install}

  ## Usage
    ${data.usage}

  ## Licenses
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions? Contact Me At:
  [${data.username}(https://github.com/${data.username})]
  ${data.email}
`;
}

module.exports = generateMarkdown;
