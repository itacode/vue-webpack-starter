# Vue webpack starter
I wanted a TypeScript Vue.js lightweight starter template, with newer versions of less tools than the ones used in the official Vue-cli, so I created my own one from scratch.

This template is to start developing single page applications with Vue.js single file components. It uses Webpack, Webpack-dev-server with hot reload enabled.

## Features
- Vue.js 3 (the version 2 is in the vue2 branch)
- TypeScript
- Vuex
- Vue-router
- Axios
- Tailwind CSS
- PostCSS
- Autoprefixer
- Scss-loader with global prepends for all scss
- CSS extraction into a file
- Environment variables
- Webpack 5
- Webpack-dev-server with hot reload
- Babel 7
- ESLint
- Prettier
- Jest

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
.env.[platform].local # only loaded in specified platform, ignored by git
.env.[platform]       # only loaded in specified platform
.env.local            # loaded in all cases, ignored by git
.env                  # loaded in all cases
```

Only `NODE_ENV`, `BASE_URL`, and variables that start with `VUE_APP_` will be statically embedded into the client bundle with `webpack.DefinePlugin`.

#### Env Loading Priorities
An env file for a specific platform (e.g. .env.production) will take higher priority than a generic one (e.g. .env).  
This [convention](https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use) has been adopted.
