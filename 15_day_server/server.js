// const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const db             = require('./config/db');
// const app            = express();
// const port = 8000;
// app.use(bodyParser.urlencoded({ extended: true }));

// MongoClient.connect(db.url, (err, client) => {
//   if (err) return console.log(err)
//   console.log(client);

//  const db = client.db('click_button');
//  console.log(db);

//   require('./app/routes')(app, client);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });
//   app.get('/', (req, res) => {
//     res.send('hello ApI');
//   });               
// })

const express = require('express');
const port = 8000;
const app = express();

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });

// app.get('/', function (req, res) {
//   res.send('hallo API');
// })

// app.get('/artists', function (req, res) {
//   res.send(artists);
// })

// var artists = [
//   {
//     id: 1,
//     name: 'Iron man'
//   },
//   {
//     id: 2,
//     name: 'Cool man'
//   },
//   {
//     id: 3,
//     name: 'Superman'
//   },

// ]
