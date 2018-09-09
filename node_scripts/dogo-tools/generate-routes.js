console.log("Generating dynamic routes file...");

//file stream module
const fs = require('fs');
// Get settings
settingsObj = require('./settings.json');
//Routes added to the array below will get saved in routes file.
var routes = [];

/*---------------------------------/
Adding routes for tricks section.
/---------------------------------*/

dataObj = require(process.cwd()+"/"+settingsObj.rootDir + settingsObj.languages[0] + '-data.json');
var tricksIds = [];

dataObj.forEach(element => {
    element.tricks.forEach(element => {
        tricksIds.push(element.id);
    });
});

settingsObj.languages.forEach(lang => {
    routes.push(lang+"/");
    tricksIds.forEach(trickId => {
        routes.push(lang+"/"+trickId);
    });
});

/*---------------------------------/
Adding routes for FAQ section.
/---------------------------------*/

dataObj = require(process.cwd()+"/"+settingsObj.rootDir + settingsObj.languages[0] + '-faq.json');
var faqIds = [];

dataObj.forEach(element => {
    faqIds.push(element.id);
});

settingsObj.languages.forEach(lang => {
    routes.push(lang+"/faq");
    faqIds.forEach(faqId => {
        routes.push(lang+"/faq/"+faqId);
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

