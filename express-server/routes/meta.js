const express = require('express');
const router = express.Router();



const {DataSchema, SchemaCode} = require ('../models/meta')

// const initSchemas = function(state){
//   var metadata = state.metadata;
//   for(var key in metadata) {
//     state.schemas[key] = state.schemas[key] || {};
//     state.models[key] = state.models[key] || {};
//     for(var i=0;i<metadata[key].length;i++){
//       var metadataschema = metadata[key][i];
//       var name = metadataschema.name
//       if(metadataschema.metaSchema) {
//         var schema1 = mongoose.Schema(metadataschema.metaSchema);
//         state.schemas[key][name] = state.schemas[key][name] || {}
//         state.schemas[key][name]['metaSchema'] = schema1
//         state.models[key][name]['metaModel'] = mongoose.model(key+'_'+name+'_meta', schema1);
//       } else if(metadataschema.instanceSchema) {
//         var schema2 = mongoose.Schema(metadataschema.instanceSchema);
//         state.schemas[key][name] = state.schemas[key][name] || {}
//         state.schemas[key][name]['instanceSchema'] = schema2
//         state.models[key][name]['instanceModel'] = mongoose.model(key+'_'+name+'_instance', schema2);
//       }
//
//
//     }
//   }
//
// }

router.post('/', function(req, res, next) {
  saveCode((req.body.code));
  DataSchema.find({  }, function(err, dataschema) {
    if (err) throw err;

    // delete him
    DataSchema.remove(function(err) {
      if (err) throw err;

      const metadata = eval("("+req.body.code+")");
      const errorArray = [], resultArray = [];
      for(var key in metadata) {
        for(var i=0;i<metadata[key].length;i++){
          var metadataschema = metadata[key][i]
          var name = metadataschema.name

          if(metadataschema.metaSchema) {
            saveSchema(key+'_'+name+'_meta', metadataschema.metaSchema, errorArray, resultArray);
          }
          if(metadataschema.instanceSchema) {
            saveSchema(key+'_'+name+'_instance', metadataschema.instanceSchema, errorArray, resultArray);
          }
        }
      }
      if(errorArray.length>0) {
        res.json(errorArray)
      } else {
        res.json(resultArray)
      }
    });
  });


});






const saveSchema = function(name, dataschema, errorArray, resultArray){
  DataSchema.create({name:name, dataschema:dataschema}, (err, dataschema) => {
    if (err) {
      errorArray.push(err);

    } else {
      resultArray.push(dataschema)

    }
  })
}

const saveCode = function(code){
  SchemaCode.find({  }, function(err, dataschema) {
    if (err) throw err;

    // delete him
    SchemaCode.remove(function(err) {
      if (err) throw err;

      SchemaCode.create({schemaCode:code}, (err, dataschema) => {
        if (err) throw err;
      })

    })
  })

}

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  SchemaCode.find({  }, function(err, code) {
    if (err) throw err;
    if(code[0])
      res.json({code:code[0].schemaCode});
    else {
      res.json(null);
    }
  });
});

router.get('/schema', function(req, res, next) {
  //res.send('respond with a resource');
  DataSchema.find({  }, function(err, code) {
    if (err) throw err;

    res.json({code:code[0].schemaCode});

  });
});

module.exports = router;
