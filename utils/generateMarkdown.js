// function to generate markdown for README
const generateMarkdown = (data) =>
`# ${data.title}
# Description
${data.description}
`;

module.exports.generateMarkdown = generateMarkdown;
