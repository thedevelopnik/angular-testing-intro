# angular-testing-intro
A tutorial on using unit and e2e testing to facilitate test-driven development Angular.js 1.4.x

## Standards
* Write unit tests in a TDD style using Mocha Chai.
* Gather and validate requirements from a user and test that user’s response to a minimum testable artifact.
* Design and execute user tests, then implement changes based on feedback.


## Objective
Coders will be able to implement unit and e2e testing of Angular components in a basic Angular app that consumes an API and displays its data in multiple ways.

## Two kinds of testing

### Unit
The first kind of testing with Angular is unit testing. This is used to test individual methods within controllers and services, and it is a similar process to unit testing on the back-end. You can also do integration testing using the unit test tools for Angular, by calling methods that access your back-end.

We will be doing unit testing using the karma test *runner*, the Mocha test *library*, and the Chai *assertion* library.

### e2e
e2e stands for End-to-End testing. e2e is powerful because you can mimic user behavior, and test the exact processes users will take on your site to make sure they have a *good user experience*. You need fewer e2e tests than unit and integration tests, because they test so many parts of your system at once. They are also time and resource intensive. Therefore, you want to pick critical processes to write e2e tests for.

We will use Protractor as our test *runner*. Protractor uses Jasmine as it's test *library*.

## Setting up
### File structure and installing tools
1. Fork and clone this repo.
1. bash npm i
1. First, we will get our file structure setup for testing.
  1. In the root directory of the project, make a "test" directory.
  1. Inside of "test", make a "e2e" directory.
  1. As we go through the process of building our angular app, we will be placing our unit testing files in the client-side directories of their related component. This is widely-accepted best practice when building an Angular app using the component model.
1. Next we need to install Karma and Protractor.
  1. > npm i -g karma-cli
    * This installs a karma command line tool that we will use to do some setup and run tests
  1. > bash npm i --save-dev karma karma-mocha karma-chai karma-chrome-launcher
    * Here we install the test runner and libraries, along with a tool that will allow karma to use Chrome to run actions
  1. > shell npm i --save-dev protractor
    * Installs protractor
  1. Finally, type > webdriver-manager update. This will get us ready to use Protractor with a mock server.

### Configuring tools
We need to configure karma and protractor. First we will configure karma.
1. Navigate to the root directory of the project.
1. ```shell karma init ```
  * Creates karma config file based on entered options.
1. First it asks what framework we want. Use tab to navigate to "mocha" and hit enter.
1. We do not want Require.js. Hit enter on the default of "no."
1. We do want to capture Chrome automatically, so hit enter on the default of "Chrome." Hit enter again on an empty entry to continue.
1. The location of our source files is our component folders. So we will enter "src/js/\*\*/\*.spec.js"
1. This will capture all the files we want; we do not need to exclude any, so we will leave this question empty. Hit enter.
1. Live checking on save? Yes please! Hit enter.
1. Congragulations! You have a karma config file! Now when we run ```bash karma start ``` it will run tests in the files labeled \*.spec.js in subdirectories of our js folder, using Mocha/Chai.
1. Last step, we're almost there! In the root directory of the project, create a file called "protractor.conf.js". Paste this code into it:
```javascript
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/e2e/*.js']
};
```
This tells protractor where to access our mock server, and where our tests are located.

## Get to coding!
Now we can start our TDD process to build this site.

### Stories
* As a site visitor, I see the current EPL table in order of points when the page loads, so I can quickly check where teams stand in the table.
* As a site visitor, I can sort the teams by name, so I can find team information more easily.
* As a site visitor, I can search teams by name using a text input, and only the teams matching my search will show up, so I can quickly find my team's information.
