# Use https://github.com/gaearon/react-transform-boilerplate instead.

## About this

This is a starter project for webpack with React hot reload

It uses a dev stack with

1. [webpack module loader](http://webpack.github.io/) as the module bundler
1. [React Hot Loader](http://gaearon.github.io/react-hot-loader/) to hot reload the file changes
1. [ReactJS](http://facebook.github.io/react/)
1. [Sass](http://sass-lang.com/) for style sheets (CSS with superpowers)

## Getting started

#### Clone this repo
```sh
$ git clone <repo URI>
```

#### Install dependencies
```sh
$ npm install
```

#### Launch in watch mode

```sh
$ npm run watch
```

Open browser at [http://localhost:8090](http://localhost:8090)

##### See HMR (Hot Module Replacement) in action

with watch mode running open `src/scripts/subfolder/hello.jsx` in a text editor, modify something and save it.
Tada !!!!

##### See HMR (Hot Module Replacement) in action for styles

open `webpack/webpack.config.js` in text editor and change 

```javascript
entry: [
    './src/scripts/index.js'
],
```

to

```javascript
entry: [
    './src/scripts/index-with-styles.js'
],
```

and restart `npm run watch`

open `src/styles/includes/body.scss` in a text editor, modify the body color and save it.
Tada !!!!


#### Dev & Prod build

```sh
$ npm run build:dev
$ npm run build:prod
```

the below creates a clean dev and prod build with 2 source maps
```sh
$ npm run build 
```