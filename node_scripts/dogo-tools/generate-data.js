console.log("Starting to generate data files...");

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
            content_type: "dogLevel",
            include: 2,
            locale: language
        })
        .then(response => {
            dogTricks = [];
            //Sort by level
            response.items.sort((a, b) => a.fields.level - b.fields.level);
            //Map required data from response to the dogTricks[] variable.
            response.items.forEach(element => {
                var trick = {
                    level: element.fields.level,
                    levelName: element.fields.name,
                    medalImageUrl: "https:" + element.fields.image.fields.file.url,
                    tricks: element.fields.tricks.map(trick => {
                        return {
                            id: trick.fields.id,
                            level: trick.fields.level,
                            name: trick.fields.name,
                            imageUrl: "https:" + trick.fields.image.fields.file.url,
                            trickSteps: trick.fields.trickSteps.map(trickStep => {
                                return {
                                    description: trickStep.fields.description,
                                    stepImage: "https:" + trickStep.fields.image.fields.file.url
                                }
                            })
                        }
                    })
                }
                dogTricks.push(trick);
            });
            
            //save data to file at "./data/[language]-data.json"
            var content = JSON.stringify(dogTricks);
            fs.writeFile(settingsObj.rootDir + language + "-data.json", content, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log("Generating data file for \""+ language +"\" language complete!");
                }
            });
        });
});