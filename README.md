## Lab 19 | File Server

### Author: Steven Jones

### Links and Resources
* [repo](https://github.com/)

[![Build Status](https://travis-ci.org/)](https://travis-ci.org/)

#### Documentation
N/A

### Modules
`./index.js`

`./app/app.js`

`./lib/read.js`

`./lib/uppercase.js`

`./lib/write.js`

-----
#### `./index.js`
This is the entry point of the application that accepts the application's command line arguments for the `alterFile` function.

#### `./app/app.js`
##### Exported Values and Methods
* `alterFile(file)` -> `undefined`
* This function takes a filepath and uses the helper functions `read`, `uppercase`, and `write` to capitalize the letters in the file.

It publishes `file-save` or `file-error` events to the `Q` server set in the environment at `QUEUE_SERVER`, depending upon the results of its operation.

-----

#### `./lib/read.js`
##### Exported Values and Methods
This module reads a file and returns a Promise that contains a file buffer.
* `read(file)` -> `Promise` -> `buffer`

-----

#### `./lib/uppercase.js`
##### Exported Values and Methods
* `uppercase(data)` -> modified `data`
This module takes a readable buffer or other input, converts it to a string, and capitalizes its letters. It returns a file buffer.

-----

#### `./lib/write.js`
##### Exported Values and Methods
* `write(file, text)` -> `Promise` -> side effect
This module reads a file and returns a Promise. It writes a `file` with the given `text` as a side effect.
-----

### Setup
#### `.env`
* `QUEUE_SERVER` - The full URL and port of the `Q` server to which the app should publish events.

#### Running the app
* `node index.js <fileName>` - to run the appln `<fileName>`, where `<fileName>` is the path to a readable file. 

#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run test-watch`
  * `npm run lint`

* What assertions were made?
  * `./app/app.js`
    * `alterFile` function
      ✓ should not throw an error

  * `./lib/read.js`
    * `read` function
      ✓ resolves when given a good file
      ✓ throws an error when given a bad file

  * `./lib/uppercase.js`
    * `uppercase` function
      ✓ should transform its argument text to uppercase (1ms)
      ✓ should accept and return a buffer

  * `./lib/write.js`
    * `write` function
      ✓ resolves when given a good file
      ✓ rejects when given a bad file
      ✓ rejects when given bad data

* What assertions need to be / should be made?
Additional integration testing between `alterFile` and the `@nmq/q` library might be performed.

#### UML
N/A