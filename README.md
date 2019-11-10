# Vue webpack 4 lean starter
I wanted a Vue.js lightweight starter template, with newer versions of less tools than the ones used in the official vue-cli, so I created my own one from scratch.

This template it is a ready to use, to start developing single page applications with Vue.js single file components. It uses Webpack 4, webpack-dev-server with hot reload enabled.

Gulp is configurated to compile scss files and serve the page.

It's possible to code in parallel the page HTML and SCSS external to Vue files, using Gulp with Browsersync or Gulp and webpack-dev-server in watch mode. Use only one of the following options:
- Execute command `gulp` . In this case Gulp watches SCSS files compiling them when they change, and also starts Browsersync, which injects compiled CSS without reloading and reloads page HTML if changed
- Execute command `npm run serve:watch` and `gulp watch` . In this case Gulp watches SCSS files compiling them when they change, and webpack-dev-server watches for changes of files in the src directory, automatically recompiling Vue files and reloading the app and HTML page

## Features
- Vue.js
- Vuex
- Vue-router
- Axios
- Promise polyfill
- Webpack 4
- Webpack-dev-server with hot reload
- Babel 7
- Vue-loader
- ESLint
- Jest
- Autoprefixer
- Scss-loader
- CSS extraction to a file
- Gulp to compile SCSS
- Gulp Browsersync to inject compiled CSS and reload page HTML
- Css original reset, that merges Meyer's reset with normalize.css
