# Aurelia and NodeJS sample app

Simple starting app based on Aurelia and Node.js

## Machine Setup

This app is built on the Aurelia CLI, which has a couple of prerequisites you must install first. If you have previously setup your machine for the Aurelia CLI, you can skip this step.

* Install NodeJS >= 4.x
    * You can [download it here](https://nodejs.org/en/).
* Install NPM 3.x
    * Even though you may have the latest NodeJS, that doesn't mean you have the latest version of NPM. You can check your version with `npm -v`. If you need to update, run `npm install npm -g`.

Once you have the prerequisites installed, you can install the Aurelia CLI itself. From the command line, use npm to install the CLI globally:

```
npm install aurelia-cli -g
```

## Application Setup

````
npm install -g nodemon
npm install
````

## Run locally
````
au run --watch
````

## Adding client libraries
If you need to add a 3rd party client library to your project, first npm install the library. 
After that, open the aurelia_project/aurelia.json file and scroll down to the build.bundles section. 
You'll need to add the library into one of your bundle's dependencies sections.

See [Aurelia CLI documentation](https://github.com/aurelia/cli) for more edge case scenarios!
