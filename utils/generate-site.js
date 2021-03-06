// require' - allows the app.js file to access the fs module's functions through the fs assignment.
// fs = file share - node stuff that is needed in order to create files
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // If an error exists, reject the Promise and send the rror to the Promise's '.catch(), method
              if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
        
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };
// this is the same as:
// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
//   };

// This is known as using shorthand property names. So if we have a property key name with the same name as the value we're associating with it, like writeFile: writeFile, we can just say writeFile, and it will understand that we're using writeFile for both the property name and its value.

// you can only use module.exports once per file