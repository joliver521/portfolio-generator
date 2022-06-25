// Short hand
// const [name, github] = profileDataArgs;
// Long form
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
// This...
// for (let i = 0; i < profileDataArr.length; i++) {
//   console.log(profileDataArr[i]);
// }

// Is the same as this...
//   profileDataArr.foreach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message:'What is your name?'
  }
])
.then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });