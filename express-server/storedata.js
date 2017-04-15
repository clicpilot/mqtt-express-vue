const {DataSchema} = require ('./models/meta')
const mongoose = require('mongoose')
const modelmap = {};

const buildModelMap = function(schema, schemaName, type) {
  const dataSchema = mongoose.Schema();
  const dbschema = schema.dataschema;

  for(var key in dbschema) {
    var obj = {};
    obj[key] = {type:String};
    dataSchema.add(obj);
  }

  var model = modelmap[schemaName+"-"+type+"-instance"];
  if(!model) {
    try{
      //console.log(dataSchema);
      model = mongoose.model(schemaName+"-"+type+"-instance", dataSchema)
      modelmap[schemaName+"-"+type+"-instance"] = model;
    } catch(e) {
      throw e
    }
  }
  return model;
}

const storedata = function(data, errorArray, resultArray) {
  for(var i=0;i<data.length;i++) {
    var schemaName = data[i].class;
    var type = data[i].type;
    (function(schemaName, type, row){
      var query = DataSchema.findOne({name:schemaName+"_"+type+"_instance"});
      query.then(function(schema){

        if(!schema) return;
        var model = buildModelMap(schema, schemaName, type)

          if(model) {
            model.create(row, (err, dataschema) => {
              if (err) {
                errorArray.push(err);

              } else {


                resultArray.push(dataschema)

              }
            });
          }

      });
    })(schemaName, type, data[i]);

  }
}

const loaddata = function(param, res) {
  var schemaName = param.class;
  var type = param.type;

    var query = DataSchema.findOne({name:schemaName+"_"+type+"_instance"});
    query.then(function(schema){

        if(!schema) {
          throw "scehma is null"
          res.json(["scehma is null"]);
          return;
        }
        var model = buildModelMap(schema, schemaName, type)



        if(model) {
          model.find({}, (err, data) => {
            res.json(data)
          });
        } else {
          //res.json([])
          throw "model is null"
          res.json(["model is null"])

        }
    });
}

module.exports = {storedata, loaddata};
