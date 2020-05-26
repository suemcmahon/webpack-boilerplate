# Webpack Boilerplate

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Instructions](#instructions)
4. [License](#license)
5. [Author](#author)

### Introduction

The main purpose of this boilerplate is to save time getting an environment up and running. I've added in features based on my personal preferences. Feel free to use and adapt this however you like! 

### Features

#### Config

The config has been separated into the following:

- webpack.common.js 
- webpack.dev.js
- webpack.prod.js

I've split it out this way as I personally find it easier to separate the config based on the different environment requirements. 

**webpack.dev.js**

The development config provides you with a web server and the ability to use live reloading. So after a change is saved, the page will automatically reload with your changes. You also get source maps for both css and js to help with debugging.

**webpack.prod.js**

The production config, minifies your code. It also separates the css into its own file which using the MiniCssExtractPlugin is automatically added to the index.html file in the dist folder. 


#### Dart Sass

Dart Sass is used because it's fast and also to ensure that you can take advantage of the newest Sass features. This article from CSS Tricks provides a great explanation of how it works:

[Introducing Sass Modules](https://css-tricks.com/introducing-sass-modules/)

#### Babel

So you are able to take advantage of all the great JS features.

#### ESLint

The config here is quite strict but feel free to configure this however you like. If you would like to configure this then change the .eslint file. I found this tool quite useful to help with configuration [ESLint Demo](https://eslint.org/demo).

#### Jest

I've added the Jest JavaScript Testing Framework for unit tests. For more information, the Jest website has lots of great resources: [Jest](https://jestjs.io).

### Instructions

*In the command line:*

`git clone git@github.com:suemcmahon/webpack-boilerplate.git`

`cd webpack-boilerplate`

`npm install`

`npm run start`

This command will automatically open a web server with the text 'Hello world' and '1 + 2 equals 3' displaying (I've added some example code to demonstrate that it's all working). If you change any of the files and save, the changes will load automatically in the browser without you needing to refresh the page.

`npm run test`

This command will run any tests. If you run this command you will see that the example test written in the sum.test.js file has passed.

`npm run build`

This command will minify all of your code into the dist folder ready for production. 

### License

ISC 

### Author

Sue McMahon

[Twitter](https://twitter.com/Susan_McM)
