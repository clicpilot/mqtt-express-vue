const express = require('express')
const router = express.Router()
const {DataSchema} = require ('../models/meta')
const mongoose = require('mongoose')
const {storedata} = require('../storedata')
const modelmap = {};




router.post('/', function(req, res, next) {

  var data = req.body.data
  const errorArray = [], resultArray = []
  storedata(data, errorArray, resultArray);

  // for(var i=0;i<data.length;i++) {
  //   var schemaName = data[i].class;
  //   var type = data[i].type;
  //   (function(schemaName, type, row){
  //     var query = DataSchema.findOne({name:schemaName+"_"+type+"_instance"});
  //     query.then(function(schema){
  //
  //       // if (err) {
  //       //   console.log(JSON.stringify(err));
  //       //   errorArray.push(err);
  //       //
  //       // } else if(schema.length==1){
  //       if(!schema) return;
  //         //console.log(JSON.stringify(schema));
  //         const dataSchema = mongoose.Schema();
  //         const dbschema = schema.dataschema;
  //         // console.log(JSON.stringify(dbschema));
  //         for(var key in dbschema) {
  //           var obj = {};
  //           obj[key] = {type:String};
  //           dataSchema.add(obj);
  //         }
  //
  //
  //
  //         // var dbschema = schema.dataschema;
  //         // console.log(JSON.stringify(dbschema));
  //         // for(var key in dbschema) {
  //         //   var obj = {};
  //         //   obj[key] = String;
  //         //   dataSchema.add(obj);
  //         // }
  //         //console.log(JSON.stringify(dbschema));
  //
  //         var model = modelmap[schemaName+"-"+type+"-instance"];
  //         if(!model) {
  //           try{
  //             //console.log(dataSchema);
  //             model = mongoose.model(schemaName+"-"+type+"-instance", dataSchema)
  //             modelmap[schemaName+"-"+type+"-instance"] = model;
  //           } catch(e) {
  //             console.log(e)
  //           }
  //         }
  //         if(model) {
  //           model.create(row, (err, dataschema) => {
  //             if (err) {
  //               errorArray.push(err);
  //
  //             } else {
  //
  //
  //               resultArray.push(dataschema)
  //
  //             }
  //           });
  //         }
  //       // }
  //     });
  //   })(schemaName, type, data[i]);
  // }
  if(errorArray.length>0) {
    res.json(errorArray)
  } else {
    res.json(resultArray)
  }

});


module.exports = router;
