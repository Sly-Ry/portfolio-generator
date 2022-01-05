// require' - allows the app.js file to access the fs module's functions through the fs assignment.
const fs = require('fs');

// first task: Generate a file
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

// This... 
const [name, github] = profileDataArgs;
// is the same as this.
// {const name = profileDataArgs[0];
// const github = profileDataArgs[1];}


// The fs.writeFile() function definition has three arguments. 
// 1. Name of the file/output data - ('index.html')
// 2. Written data/the HTML string template - (generatePage(name, github))
// 3. Callback function for error handling or success message - (err)
fs.writeFile('index.html', generatePage(name, github), err => {
    // If an error exists, "error message" is displayed
    if (err) throw new Error(err);

    console.log('Portfolio complete! Checkout out index.html to see the output!');
});