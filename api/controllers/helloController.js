'use strict';

const config = require('../common/connectionConfig');
const sql = require('mssql');

exports.getAll = function(req, res) {
  sql.connect(config.connection, function(err){
    if (err)
      console.log(err);

    const request = new sql.Request();
    let response = null;

    request
      .query('select * from Greeting')
      .then(function(recordset) {
        if (err)
          console.log(err);
    
        response = recordset.recordsets[0];
        sql.close();
      }).then(function(){
        res.send(response);     
      }).catch(function(err){
        sql.close();
        console.log(err);
      });
  });
};

exports.create = function(req, res) {
  sql.connect(config.connection, function(err){
    if (err)
      console.log(err);

    const request = new sql.Request();

    request
      .query(`insert into Greeting values ('${req.body.Greeting}')`)
      .then(function() {
        if (err)
          console.log(err);
    
        sql.close();
      }).then(function(){
        res.send(201);     
      }).catch(function(err){
        sql.close();
        console.log(err);
      });
  });
};