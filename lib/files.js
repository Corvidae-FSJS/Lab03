const { promisify } = require('util');
const fs = require('fs');
const mkdirpCb = require('mkdirp');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const mkdirp = promisify(mkdiurpCb)

module.exports = {
  readFile,
  writeFile,
  readdir,
  mkdirp
};