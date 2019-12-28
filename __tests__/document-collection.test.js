const DocumentCollection = require('../lib/document-collection');
const path = require('path');

jest.mock('../lib/files.js', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
  readdir: jest.fn(),
}));

const { readFile, writeFile, readdir } = require('../lib/files');

describe('Document Collection', () => {
  it('takes object and writes to new file', () => {
    const exampleObject = { name: 'Dylan', artist: true, _id: '12345' };
    const writePromise = Promise.resolve(exampleObject);
    writeFile.mockReturnValueOnce(writePromise);

    const dir = 'documents';
    const newDocuments = new DocumentCollection(dir);

    return newDocuments.save(exampleObject)
      .then(object => {
        expect(path.dirname(writeFile.mock.calls[0][0])).toBe(dir);
        expect(writeFile.mock.calls[0][1]).toBe(JSON.stringify(exampleObject));
        expect(object._id).toEqual(expect.any(String));
      });
  });

  it('reads an object from a file', () => {
    const exampleObject = { name: 'Dylan', artist: true, _id: '12345' };

    const readPromise = Promise.resolve(JSON.stringify(exampleObject));
    readFile.mockReturnValueOnce(readPromise);

    const dir = 'documents';
    const newDocuments = new DocumentCollection(dir);
    const id = exampleObject._id;
    
    return newDocuments.get(id)
      .then(object => {
        expect(readFile.mock.calls[0][0]).toBe(`${dir}/${id}.json`);
        expect(object._id).toBe('12345');
      });
  });

  it('reads all object from a directory', () => {
    const exampleObject = { name: 'Dylan', artist: true, _id: '12345' };
    const readDirPromise = Promise.resolve(['12345.json']);
    readdir.mockReturnValueOnce(readDirPromise);

    const readPromise = Promise.resolve(JSON.stringify(exampleObject));
    readFile.mockReturnValueOnce(readPromise);

    const dir = 'documents';
    const newDocuments = new DocumentCollection(dir);
    

    return newDocuments.getAll()
      .then(array => {
        expect(readdir.mock.calls[0][0]).toBe(dir);
        expect(readFile.mock.calls[0][0]).toBe(`${dir}/${exampleObject._id}.json`);
        expect(array[0]._id).toBe(exampleObject._id);
      });
  });
});
