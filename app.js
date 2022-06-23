const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
  // This...
  // for (let i = 0; i < profileDataArr.length; i++) {
  //   console.log(profileDataArr[i]);
  // }

  // Is the same as this...
  profileDataArr.foreach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
