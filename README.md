# Node.js and Express Basics

Some basic commands and details about Node.js and Express.

### Node REPL

REPL (Read Evaluation Print Loops), similar to the Console on a web browser.

Start:

    $ node

Exit:

    > .exit

### Run JavaScript File with Node

    $ node [filename]

### Internal Node Library -> Filesystem

    const fs = require("fs");

### Create package.json file

    $ npm init

Follow the prompts to create one for your specifications.

### Add package with npm

Development:

    $ npm install --save-dev [package-name]

All:

    $ npm install --save [package-name]

NOTE: --save is done automatically now

### Install all modules in package.json

    $ npm install

### Install Express

    $ npm install express

## Deploy to Heroku

Download the Heroku CLI: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

Login to Heroku (press any key to open up browser to login):

    $ heroku login

Make sure the the main JS file has the correct port setup:

    app.listen(process.env.PORT || 3000, () => {
        console.log("server is running on port 3000");
    });

Add a Profile to the main directory. The Procfile tells Heroku how to run the app. Example contents for Node.js:

    web: node app.js
