const pkg = require('./package')

// Get list of pregenerated routes.
listOfRoutes = require('./static/data/routes.json');

module.exports = {
  mode: 'universal',
  generate : {
    routes: function() {
      /*return [
        '/en-US/',
        '/ru/'
      ]*/
      return listOfRoutes;
    }
  },
  env:{
    NODE_ENV: 'production'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/',
        component: resolve(__dirname, 'pages/_lang.vue'),
        children: [
          {
            path: "",
            component: resolve(__dirname, 'pages/_lang/index.vue'),
          }
        ]
      })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      //{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['~/local_packages/jquery-3.3.1.min.js'],
    extend(config, ctx) {

    }
  }
}
