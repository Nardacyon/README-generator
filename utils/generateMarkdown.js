// function to generate markdown for README
async function generateMarkdown(response) {
  return `  # ${response.title}

  #Table of Contents

  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Test](#test)
  -[Credits](#credits)
  -[License](#license)
  -[Questions](#questions)

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

  - [License](https://opensource.org/licenses/${response.license})

  ## Questions: 
    For questions about the project go to my GitHub page at:

  -[GitHub Profile](https://github.com/${response.username})
`;
}

module.exports= generateMarkdown;