console.log("Generating faq files...");

//file stream module
const fs = require('fs');

//loading contentful API
const contentful = require("contentful");

// Get settings
settingsObj = require('./settings.json');

//init contentful
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "kwv2a1fuvgvq",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken:
        "84e3258ddfdf9708434dc6e7f25977ebcd0a67219be7600287a9af50899f7a6f"
});

settingsObj.languages.forEach(language => {
    //Get data from contentful based on language parameter.
    //NOTE: To see the resulting data structure, output it in a console by uncommenting line in the code near the bottom of the script.
    client
        .getEntries({
            content_type: "faq",
            //include: 2,
            locale: language
        })
        .then(response => {
            dogFaqs = [];
            //Sort by level (NOT NEEDED AT THE MOMENT)
            //response.items.sort((a, b) => a.fields.level - b.fields.level);
            //Map required data from response to the dogFaqs[] variable.
            response.items.forEach(element => {
                //check if FAQ is not in ignore list
                if(settingsObj.faqsToIgnore.includes(element.fields.id)) {
                    return;
                }

                var faq = {
                    id: element.fields.id,
                    title: element.fields.title,
                    text: element.fields.text
                }

                dogFaqs.push(faq);
            });
            //save faq data file to "static/data/[language]-faq.json"
            
            var content = JSON.stringify(dogFaqs);
            fs.writeFile(settingsObj.rootDir + language + "-faq.json", content, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log("Generating faq data file for \""+ language +"\" language complete!");
                }
            });

        });
});