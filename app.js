// require' - allows the app.js file to access the fs module's functions through the fs assignment.
const fs = require('fs');
const inquirer = require('inquirer');

// first task: Generate a file
const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// // This... 
// // const [name, github] = profileDataArgs;
// // is the same as this.
// // {const name = profileDataArgs[0];
// // const github = profileDataArgs[1];}


// // The fs.writeFile() function definition has three arguments. 
// // 1. Name of the file/output data - ('index.html')
// // 2. Written data/the HTML string template - (generatePage(name, github))
// // 3. Callback function for error handling or success message - (err)
// fs.writeFile('./index.html', pageHTML, err => {
//     // If an error exists, "error message" is displayed
//     if (err) throw err;

//     console.log('Portfolio complete! Checkout out index.html to see the output!');
// });
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username:'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
};   



const promptProject = () => {
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};

promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers));