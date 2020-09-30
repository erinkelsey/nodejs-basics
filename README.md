# Node.js Basics

Some basic commands and details about Node.js.

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
