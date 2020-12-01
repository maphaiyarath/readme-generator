// function to generate markdown for README
const generateMarkdown = (data) =>
`# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)

## Description
${data.description}

## Installation

## Usage

## Credits

## License

## Badges

## Contributing
`;

module.exports.generateMarkdown = generateMarkdown;
