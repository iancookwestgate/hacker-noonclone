# Hacker Noon Website Clone

#### By **Ian Cook Westgate**

## Description

This copy of Hacker Noon is an app designed for Epicodus to practice cloning a website using the Angular framework. The links have no functionality, but the final version will include connections to a Firebase database in the back-end.

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| User can enter where they hurt to receive a list of doctors who can help with that problem in Portland, OR. | "teeth" | The profiles of 2 doctors who specialize in dental care appear on the webpage. |
| User can enter a doctor's name and receive a list of doctors who have that name in Portland, OR. | "John Butler"| The profile of Dr. John Butler, MD appears on the webpage. |
| If the query response doesn't return any doctors, the application will return a notification that states that no doctors meet the criteria in Portland, OR. | "dysfunction" | "I'm sorry, but no doctors in Portland, OR have the training to treat your 'dysfunction.' Please try using a different word to describe where you are experiencing pain."

## Setup

* Install Node.js.
* Clone the repo: https://github.com/iwestgate931/hacker-noonclone.git.
* `npm install` to install dependencies.
* Make a file called .env in the root directory. Sign up for the Better Doctor API to get a key, and place it in this file like this: exports.apiKey=KEYGOESHERE
* `npm run start` to build and start the dev server.
* `npm run lint` to explicitly run ESLint.


## Technologies Used

* HTML
* CSS
  * SASS
* JavaScript
* Node.js
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint

## Known Bugs

* There are no known bugs at this time.

## Support and contact details

_Email iwestgate@hotmail.com with any questions._

## License

This software is licensed under the MIT license.

Copyright (c) 2019 **Ian Cook Westgate**



# Hacker Noon Website Clone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
