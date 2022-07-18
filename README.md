1. Instalation

For installing all the dependencies run 'npm install' in the current root directory 'test'.


2. How to use

 - run 'npm test' to run the tests one single time using Karma
 The script will run Karma which will run the unit tests in a single run mode checking all unit tests. 
 Istanbul unit code coverage will be used in this scenario to print a coverage summary and generate a HTML Summary in the 'test/coverage' directory.
Istanbul will update the source code files in order to analize and provide the unit test coverage data. That is why it is not recommended for debug.


 - run 'npm test:watch' to run the tests and Karma will check for test file changes. on file update it will run the tests again.
 Useful in development. This npm script will not run Istanbul code coverage because Istanbul will update the code.

Folder structure

- coverage - contains the generated HTML and CSS report, generated using Istanbul Unit Test Code Coverage
- fake - directory in which we keep the fake data(JSON, HTML, XML) used for faking the network requests using Sinon fakeServer
- test - directory where all the Unit Test code; This is also handled with webpack and babel so writing ES6 code


3. Debug

When running the test:watch script Karma will start a Node.js server. You can open the karma context page at : http://localhost:9876/

Clicking on the debug button or just accessing the debug html page at http://localhost:9876/debug.html will be used for debuggging unit tests.

Happy Testing!