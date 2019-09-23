/* import and use validators */

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */
  /*eslint-disable-next-line*/
  validate(model) {

    //Marty's Demo
  // // make return object
  //   const data = {};
  // //get keys from model
  //   //loop the keys
  //   //copy property to new object
  //   Object.keys(this.schema).forEach(key => {
  //     data[key] = model[key];
  //   });
  // //return object  
  //   return data;
  }
}

module.exports = Schema;