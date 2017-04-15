const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const {DataSchema} = require ('../models/meta')
const {loaddata} = require('../storedata')
const modelmap = {};

router.post('/meta', function(req, res, next) {
  DataSchema.find({  }, function(err, dataschema) {
    if (err)
      res.json(err);
    else 
      res.json(dataschema);
  });
});

router.post('/', function(req, res, next) {
  var param = req.body
  loaddata(param, res)
});

router.post('/bk', function(req, res, next) {

  var param = req.body;
  const errorArray = [], resultArray = [];
  // for(var i=0;i<data.length;i++) {
    var schemaName = param.class;
    var type = param.type;
    (function(schemaName, type){
      var query = DataSchema.findOne({name:schemaName+"_"+type+"_instance"});
      query.then(function(schema){

          if(!schema) return;

          const dataSchema = mongoose.Schema();
          const dbschema = schema.dataschema;
          // console.log(JSON.stringify(dbschema));
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
              console.log(e)
            }
          }
          if(model) {
            model.find({}, (err, data) => {
              console.log(data)
              res.json(data)
            });
          } else {
            res.json([])
          }
        // }
      });
    })(schemaName, type);

  // }


});


module.exports = router;
