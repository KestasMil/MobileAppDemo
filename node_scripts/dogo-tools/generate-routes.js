//file stream module
const fs = require('fs');

console.log("Generating dynamic routes file...");

// Get settings
settingsObj = require('./settings.json');

//get first [language]-data.json file based on first language in settings json file.
//dataObj = require('../../data/' + settingsObj.languages[0] + '-data.json');
dataObj = require(process.cwd()+"/"+settingsObj.rootDir + settingsObj.languages[0] + '-data.json');

//create array of all tricks ids
var tricksIds = [];

dataObj.forEach(element => {
    element.tricks.forEach(element => {
        tricksIds.push(element.id);
    });
});

//create routes array.
var routes = [];
settingsObj.languages.forEach(lang => {
    routes.push(lang+"/");
    tricksIds.forEach(trickId => {
        routes.push(lang+"/"+trickId);
    });
});

//create routes file at "./data/routes.json" to store routes array.
var content = JSON.stringify(routes);
fs.writeFile(settingsObj.rootDir + "routes.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log("Routes file generated!");
    }
});

