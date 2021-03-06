import express from 'express';
import bodyParser  from 'body-parser';
import randomString  from 'randomString';
import dotenv from 'dotenv';
import request from 'request';
import session from 'express-session';
import proxy from 'http-proxy-middleware';
import * as Utils from './utils';
import sequelize from 'Sequelize';
import * as path from 'path';
import qs from 'qs';
import url from 'url';


dotenv.config();

const csrfString = randomString.generate();
const redirectURI = process.env.host + '/redirect';

const app = express();
const port = process.env.PORT || 5000;
const models = require('./../db/models/index.js');

app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: randomString.generate(),
    resave: false,
    saveUninitialized: false
  })
)

// let currentPath = __dirname.slice(-6);

// app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 
// app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'build', 'index.html'));
//  }); //all paths will now serve the index.html file with the 'root' -
 //that way all of our url routes will be handled on the client side

app.get('/api/login', (req,res) => {
  res.send({
    message: 'Hi!'
  })
})


app.get('/api/destinations', (req,res) => {
  res.send({
    name: 'Kyoto',
    country: 'Japan',
    img: '201.jpg'
  })
});

app.post('/api/favorite', (req,res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/api/weather', (req,res) => {
  console.log('hello')
  if(!req.query.address) {
    res.send({
      error: 'Address query param is required'
    });
  } else {

    let sendData = (err, data) => {
      if(err) {
        res.send(err);
      } else {
        res.send({ title: 'Weather', forcast: data.forcast, address: req.query.address, location: data.location, temperatureMin: data.temperatureMin, temperatureMax: data.temperatureMax});
      }
    };
                                          //if  we dont default we might  recieve the cannot get logitude of  undefined error
    const getWeatherDataFromCoords = (err, {longitude, latitude =  0, location} = {}, callback) => { // {} = {} defaulting  to empty object if nothing is passed
      if(err) {                                //also setting a default property for lat
        res.send(err);
      } else {

        if(longitude !== undefined) {
          Utils.getWeather(longitude, latitude, location, sendData);
        } else {
          res.send({  error: 'Cannot get Mapbox Data'});
        }

      }

    };

    let geoData  = Utils.geoCode(req.query.address, getWeatherDataFromCoords);
  }
});


  models.db.sync().then(
    console.log('The postgres database has been created'),
    app.listen(port, (error) => {
      if (error) throw error;
       console.log(`Your server is listening on port ${port}`);
    })
  )



// app.listen(port, () => console.log(`Listening on port ${port}`));
