jest.mock('../lib/files.js', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
  readdir: jest.fn(),
}));

// for setting up mock expectations
const { readFile, writeFile, readdir } = require('../lib/files');
const DocumentCollection = require('../lib/document-collection');
const dest = 'banana';
const newDocuments = new DocumentCollection(dest);

describe('Document Collection', () => {
  // TODO
  it('takes object and writes to new file', () => {
    const exampleObject = { name: 'Dylan', artist: true };
    writeFile.mockResolvedValue(exampleObject);

    return newDocuments.save(exampleObject)
      .then(returnedObj => {
        const writeCalls = writeFile.mock.calls;
        expect(writeCalls.length).toBe(1);
        expect(writeCalls[0][0]).toBe(`${dest}/${returnedObj.id}.json`);
        expect(writeCalls[0][1]).toBe(JSON.stringify(exampleObject));
      });
  });
});
