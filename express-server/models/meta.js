const mongoose = require('mongoose')

const schemaSchema = mongoose.Schema({
  name : { type: String, required : true },
  dataschema : { type: Object, required : true },
})

const schemaCode = mongoose.Schema({
  schemaCode : { type: String, required : true },
})

const DataSchema = mongoose.model('DataSchema',schemaSchema);
const SchemaCode = mongoose.model('SchemaCode',schemaCode);


module.exports = {DataSchema, SchemaCode};
