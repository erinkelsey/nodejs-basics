# Node.js and Express Basics

Some basic commands and details about Node.js and Express.

### Node Event Loop

- Timers
  - Execute setTimeout, setInterval callbacks
- Pending Callbacks
  - Execute I/O related callbacks that were detected (I/O -> disk and network operations -> blocking operations)
- Poll
  - retrieve new I/O events, execute their callbacks
  - or jump to Timer execution
  - or defer execution back to Pending Callbacks
- Check
  - execute setImmediate callbacks
- Close callbacks
  - execute all 'close' event callbacks
- process.exit
  - when refs == 0, else loop

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

To say yes to all of the defaults:

    $ npm init -y

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

1.  Download the Heroku CLI: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

2.  Login to Heroku (press any key to open up browser to login):

        $ heroku login

3.  Make sure the the main JS file has the correct port setup:

        app.listen(process.env.PORT || 3000, () => {
            console.log("server is running on port 3000");
        });

4.  Add a Profile to the main directory. The Procfile tells Heroku how to run the app. Example contents for Node.js:

        web: node app.js

5.  Make sure that all changes are committed to Git

6.  Create a new Heroku app for the project:

Auto-generated name:

    $ heroku create

Specified name:

    $ heroku create <name>

7.  Deploy code with

        $ git push heroku master

8.  Logs for server

        $ heroku logs --tail
