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
