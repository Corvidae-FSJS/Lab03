/*eslint-disable-next-line*/
const Schema = require('../lib/Schema');

describe('Schema', () => {
  it('true', () => {
    expect(true).toBe(true);
  });

//Marty's Demo
  // add a test schema
  // const schema = new Schema({
  //   name : {
  //     type: String,
  //     required: true
  //   },
  //   isFun: {
  //     type:Boolean,
  //     required:false
  //   },
  //   luckyNumber: {
  //     type:Number,
  //     required: false
  //   }
  // });



  // it('validates a correct model', () => {
  //   const model = {
  //     name: 'Good',
  //     isFun: true,
  //     luckyNumber: 79
  //   };
  //   const record = schema.validate(model);

  //   expect(record).not.toBe(model);
  //   expect(record).toEqual(model);
  // });

  // it('throws on invalid model', () => {

  // });

  // more test cases...
});