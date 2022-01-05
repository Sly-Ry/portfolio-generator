// require' - allows the app.js file to access the fs module's functions through the fs assignment.
const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);

// This... 
const [name, github] = profileDataArgs;
// is the same as this.
// {const name = profileDataArgs[0];
// const github = profileDataArgs[1];}

// first task: Generate a file
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

// The fs.writeFile() function definition has three arguments. 
// 1. Name of the file/output data - ('index.html')
// 2. Written data/the HTML string template - (generatePage(name, github))
// 3. Callback function for error handling or success message - (err)
fs.writeFile('index.html', generatePage(name, github), err => {
    // If an error exists, "error message" is displayed
    if (err) throw err;

    console.log('Portfolio complete! Checkout out index.html to see the output!');
});

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
