var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'admin'
});
connection.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/streams',function(req,res) {
  connection.query('select * from edu_hub.stream', function(err, rows, fields){
    res.send(rows);
  });
});

app.get('/getstream/:id',function(req,res) {
  connection.query('select * from edu_hub.stream where stream_id='+req.params.id, function(err, rows, fields){
    res.send(rows[0]);
  });
});

app.post('/addstream',function(req,res) {
  var body = req.body;
  var insertQuery = 'insert into edu_hub.stream(name, description) values("'+body.name+'","'+body.desc+'")';
  connection.query(insertQuery, function(err, rows, fields){
    res.send(rows);
  });
});

app.put('/updatestream',function(req,res) {
  var body = req.body;
  var updateQuery = 'update edu_hub.stream set name="'+body.name+'", description="'+body.desc+'" where stream_id = '+body.id;
  connection.query(updateQuery, function(err, rows, fields){
    res.send(rows);
  });
});

app.delete('/deletestream/:id',function(req,res) {
  var deleteQuery = 'delete from edu_hub.stream where stream_id = '+req.params.id;
  connection.query(deleteQuery, function(err, rows, fields){
    res.send(rows);
  });
});

// academy api's
app.get('/academylevels',function(req,res) {
  connection.query('select * from edu_hub.academy_level', function(err, rows, fields){
    res.send(rows);
  });
});

app.get('/getacademylevel/:id',function(req,res) {
  connection.query('select * from edu_hub.academy_level where academy_level_id='+req.params.id, function(err, rows, fields){
    res.send(rows[0]);
  });
});

app.post('/addacademylevel',function(req,res) {
  var body = req.body;
  var insertQuery = 'insert into edu_hub.academy_level(name, description) values("'+body.name+'","'+body.desc+'")';
  connection.query(insertQuery, function(err, rows, fields){
    res.send(rows);
  });
});

app.put('/updateacademylevel',function(req,res) {
  var body = req.body;
  var updateQuery = 'update edu_hub.academy_level set name="'+body.name+'", description="'+body.desc+'" where academy_level_id = '+body.id;
  connection.query(updateQuery, function(err, rows, fields){
    res.send(rows);
  });
});

app.delete('/deleteacademylevel/:id',function(req,res) {
  var deleteQuery = 'delete from edu_hub.academy_level where academy_level_id = '+req.params.id;
  connection.query(deleteQuery, function(err, rows, fields){
    res.send(rows);
  });
});

app.listen(3200, function(){
  console.log('App running on 3200 port');
});
