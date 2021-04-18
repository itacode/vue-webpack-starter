# Vue webpack starter
I wanted a Vue.js lightweight starter template, with newer versions of less tools than the ones used in the official Vue-cli, so I created my own one from scratch.

This template it is a ready to use, to start developing single page applications with Vue.js single file components. It uses Webpack, Webpack-dev-server with hot reload enabled.

Gulp is configurated to compile scss files and serve the page.

It's possible to code in parallel the page HTML and SCSS external to Vue files, using Gulp with Browsersync or Gulp and Webpack-dev-server in watch mode. Use only one of the following options:
- Execute command `gulp` . In this case Gulp watches SCSS files compiling them when they change, and also starts Browsersync, which injects compiled CSS without reloading and reloads page HTML if changed
- Execute command `npm run serve:watch` and `gulp watch` . In this case Gulp watches SCSS files compiling them when they change, and Webpack-dev-server watches for changes of files in the src directory, automatically recompiling Vue files and reloading the app and HTML page

## Platforms and Environment Variables
### Platforms
**Platform** is a way to specify an environment file to be loaded by `dotenv`.  
For example if you want `.env.production` to be loaded, you need to specify `--env platform=production` parameter in the webpack command of npm the script:
```shell
"build": "webpack --node-env production --mode=production --env platform=production --progress"
```
### Environment Variables
You can specify env variables by placing the following files in your project root:
```shell
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[platform]         # only loaded in specified platform
.env.[platform].local   # only loaded in specified platform, ignored by git
```
#### Env Loading Priorities
An env file for a specific platform (e.g. .env.production) will take higher priority than a generic one (e.g. .env).

## Features
- Vue.js
- Vuex
- Vue-router
- Axios
- Promise polyfill
- Environment variables
- Webpack 5
- Webpack-dev-server with hot reload
- Babel 7
- Vue-loader
- ESLint
- Jest
- Autoprefixer
- Scss-loader with global prepends for all scss
- CSS extraction to a file
- Gulp to compile SCSS
- Gulp Browsersync to inject compiled CSS and reload page HTML
- Css original reset, that merges Meyer's reset with normalize.css
