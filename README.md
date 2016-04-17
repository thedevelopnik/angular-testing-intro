# angular-testing-intro
A tutorial on using unit and e2e testing with Angular.js 1.4.x

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
1. First, we will get our file structure setup for testing.
  1. In the root directory of the project, make a "test" directory.
  1. Inside of "test", make a "e2e" directory and a "unit" directory.
  1. Side note, this is not the most popular practice for setting up unit tests in Angular. Many people make an e2e directory here, but place their unit tests in the same client-side directories as the components they are testing. However, for simplicity's sake in learning the basics of Angular testing, we will keep all our tests in the same place.
1. Next we need to install Karma and Protractor.
  1. > npm i -g karma-cli 
    * This installs a karma command line tool that we will use to do some setup and run tests
  1. > npm i --save-dev karma karma-mocha karma-chai karma-chrome-launcher
    * Here we install the test runner and libraries, along with a tool that will allow karma to use Chrome to run actions
  1. npm i --save-dev protractor
    * Installs protractor
