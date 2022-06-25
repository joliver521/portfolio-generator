const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

// Short hand
const [name, github] = profileDataArgs;
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



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});