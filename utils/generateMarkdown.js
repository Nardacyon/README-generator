// function to generate markdown for README
async function generateMarkdown(response) {
  return `  # ${response.title}

  ## Table of Contents

  [Description](#description) \n
  [Installation](#installation) \n
  [Usage](#usage) \n
  [Contributing](#contributing) \n
  [Test](#test) \n
  [Credits](#credits) \n
  [License](#license) \n
  [Questions](#questions) \n

  ## Description:
  ![License]()

    ${response.description}
  ## Installation: 
    ${response.installation}
  ## Usage:
    ${response.usage}
  ## Contributing: 
    ${response.contributing}
  ## Test: 
    ${response.test}
  ## License:  

   [License](https://opensource.org/licenses/${response.license})

  ## Questions: 
    For questions about the project go to my GitHub page at:

  [GitHub Profile](https://github.com/${response.username})
`;
}

module.exports= generateMarkdown;