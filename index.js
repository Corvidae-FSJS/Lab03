const database = require('./lib/database');

database.connect('./db');

const models = require('./models/models');

const person = {
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  married: { type: 'boolean' },
  kids: { type: 'number' }
};

models.create(person)
  .then(res => {
    models.findById(res.id)
      .then(res => console.log(res));
  });

models.find()
  .then(res => console.log(res));


// const DocumentCollection = require('./lib/document-collection');

// const documents = new DocumentCollection('./docs');

// // write some code to exercise your document collection

// const exampleObject = {
//   key: 'value',
//   name: 'Dylan',
//   artist: true
// };


// documents.save(exampleObject);