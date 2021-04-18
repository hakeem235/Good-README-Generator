// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  } else if (license === 'The GNU GPL v2 License') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'

  } else if (license === 'The GNU GPL v3 License') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'

  } else if (license === 'Apache License') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'The MIT License') {
    return '[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)'

  } else if (license === 'The GNU GPL v2 License') {
    return '[https://img.shields.io/badge/License-GPL%20v2-blue.svg](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'

  } else if (license === 'The GNU GPL v3 License') {
    return '[http://www.gnu.org/licenses/gpl-3.0](http://www.gnu.org/licenses/gpl-3.0)'

  } else if (license === 'Apache License') {
    return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)'

  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "N/A") {
    return `Current project under ${license}`
  } else {
    return 'Current application does not have License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data)
  //console.log(renderLicenseBadge(data.License))
  return `# ${data.Title} 
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}
  ## Table of Contents 
   * [Installation](##Installation)
   * [Usage](##Usage)
   * [License](##License)
   * [Contributing](##Contributing)
   * [Tests](##Tests)
   * [Questions](##Questions)
   
  
  ## Installation
   The following are steps to install the application: ${data.Installation}
  ## Usage 
   To use the application, ${data.Usage} 
  ## License 
   ${renderLicenseSection(data.License)}
  
   ${renderLicenseLink(data.License)}
  ## Contributing
  Contributors: ${data.Contributing}
  ## Tests
  Following steps have to be taken to test the application: ${data.Tests}
  ## Questions
  If you have any question please call on: ${data.Questions}
  https://github.com/${data.GitHub}/${data.Title}
  ${data.email}
  `;
}

module.exports = generateMarkdown;