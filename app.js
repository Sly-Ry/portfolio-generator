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
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          }
          else {
            console.log('Please enter your name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username: (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          }
          else {
            console.log('Please enter Github username.');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself for an "About" section?',
        // when - allows us to write conditional code based on the answers the user has supplied thus far.
        when: ({ confirmAbout}) => {
          if (confirmAbout) {
            return true;
          }
          else {
            return false;
          }
        }
      }
    ]);
};   

const promptProject = portfolioData => {
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        }
        else {
          console.log('Please enter a name for your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project: (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        }
        else {
          console.log('Please enter a description for your project.');
          return false;
        }
      }
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
      message: 'Enter the GitHub link to your project. (Required)',
      validate: gitLinkInput => {
        if (gitLinkInput) {
          return true;
        }
        else {
          console.log('Please enter a Github link for your project.');
          return false;
        }
      }
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
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    }
    else {
      return portfolioData;
    }
  })

};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });