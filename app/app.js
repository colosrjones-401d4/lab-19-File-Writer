'use strict';

const Q = require('@nmq/q/client');

// Import alterFile component functions
const read = require('../lib/read.js');
const uppercase = require('../lib/uppercase.js');
const write = require('../lib/write.js');

/**
 * This function reads a file and replaces its contents with
 * uppercased letters. It sends an object to the Socket.io server
 * on completion or error.
 * @function
 * @name alterFile
 * @param file {path} The path to a file on the filesystem
 */
const alterFile = file => {
  read(file)
    .then(uppercase)
    .then(buffer => write(file, buffer))
    .then(() => Q.publish('files', 'save', file))
    .catch(err => Q.publish('files', 'error', err));
};

module.exports = alterFile;