const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('./docs');

// write some code to exercise your document collection

const exampleObject = {
  key: 'value',
  name: 'Dylan',
  artist: true
};


documents.save(exampleObject);