# Dogo-WebApp
> Slick DOGO-WebApp project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
For detailed explanation on how things work in Nuxt.js framework, checkout [Nuxt.js docs](https://nuxtjs.org).

## Dogo-tools
Inside the folder *node_scripts/dogo-tools/* node.js scripts are located for retrieving **dogo** content from contentful and saving it locally. It is required to have data files generated for *Dogo-WebApp* to work.
``` bash
# Generate/Update files static/data/[lang]-data.json that contain dogo tricks data.
$ npm run generate-data
```
``` bash
# Generate/Update file static/data/routes.json containing list of routes available in the web app.
$ npm run generate-routes
```
``` bash
# Generate/Update file static/data/[lang]-faq.json containing FAQs of the application.
$ npm run generate-faq
```