const util = require("util")
const fs = require("fs")
const readFile = util.promisify(fs.readFile);

// function to generate markdown for README
async function generateMarkdown(data) {
  const licenseJSON = JSON.parse(await readFile("./JSON/licenses.json", "utf8"));

  return `  # ${data.title}

  [![${data.license}](${licenseJSON[data.license].badge})](${licenseJSON[data.license].publicFile})

  ## Table of Contents

    * [Description](#description) \n
    * [Installation](#installation) \n
    * [Usage](#usage) \n
    * [Contributing](#contributing) \n
    * [Test](#test) \n
    * [Credits](#credits) \n
    * [License](#license) \n
    * [Questions](#questions) \n

  ## Description:
  ![](${data.screenshot})

    ${data.description}
  ## Installation: 
    ${data.installation}
  ## Usage:
    ${data.usage}
  ## Contributing: 
    ${data.contributing}
  ## Test: 
    ${data.test}
  ## License:  

  This project is protected under the [${data.license}](${licenseJSON[data.license].publicFile}) license. Use is encouraged as outlined in this license.

  ## Questions: 
  For questions about the project go to my GitHub page at:

    * [GitHub Profile](https://github.com/${data.username})
`;
}

module.exports= generateMarkdown;