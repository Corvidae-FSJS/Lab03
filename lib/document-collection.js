const files = require('./files');
// use npm to find a module for creating ids
const shortid = require('shortid');

class DocumentCollection {
  constructor(folder) {
    this.folder = folder;
  }

  save(object) {
    // TODO:
    // 1. assign an id
    const id = shortid.generate();
    object.id = id;
    // 2. serialize object DC/Stringify?
    const serializedObject = JSON.stringify(object);
    // 3. use promisified fs to write to folder path using id.json as file name
    const filePathName = `${this.folder}/${id}.json`;
    // 4. "return" object (which now has an id)
    return files.writeFile(filePathName, serializedObject)
      .then(() => {
        return object;
      })
    // 5. if expected, turn promisified fs errors into meaningful database errors
      .catch(err => {
        console.log('ERROR', err);
      });
  }

  get(id) {
    // TODO:
    // 1. create file path from id

    // 2. use promisified fs to read file
    // 3. deserialize contents
    // 4. "return" object
    // 5. if expected, turn promisified fs errors into meaningful database errors
  }

  getAll() {
    // TODO:
    // 1. read folder file names
    // 2. use Promise.all and map each file name to a this.get call (remove .json file extension!)
    // 3. "return" array of objects
    // 4. if expected, turn promisified fs errors into meaningful database errors
  }
}

module.exports = DocumentCollection;