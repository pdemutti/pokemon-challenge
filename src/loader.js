var express = require('express')
var app = express()
var fs = require('fs')
var _ = require('lodash') 
var axios = require('axios');

const bodyParser = require('body-parser');
const allowCors = require('./config/cors');

const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

app.get('/api/pokemon/', function (req, res) {
    console.log(req.query)
    
  axios.get('http://pokeapi.co/api/v2/pokemon/'+req.query.name)
  .then(function (response) {
      console.log(response.data.name)
      res.send(JSON.stringify({ name: response.data.name }));
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.use(express.static('public'));


app.listen(port, () => {
    console.log('Server running on port ' + port);
  });