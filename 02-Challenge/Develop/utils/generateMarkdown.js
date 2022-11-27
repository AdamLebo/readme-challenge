// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
