/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('dotenv').load({silent: true});

var express = require('express');
var app = express();
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// var config = {

//     username: "708f5664-061a-4780-8728-d2d185e1eb89",
//     password: "3eolwKkRCqT1"
// };

// module.exports = config;

// Bootstrap application settings
require('./config/express')(app);

// Create the service wrapper
var toneAnalyzer = new ToneAnalyzerV3({
  // If unspecified here, the TONE_ANALYZER_USERNAME and TONE_ANALYZER_PASSWORD environment properties will be checked
  // or TONE_ANALYZER_IAM_APIKEY if is available
  // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
username: '708f5664-061a-4780-8728-d2d185e1eb89',
 password: '3eolwKkRCqT1',
  version: '2017-09-21'
});

app.get('/', function(req, res) {
  res.render('index');
});

//var userInputText = document.getElementById('usertext');

var toneParams = {

  'tone_input': "i am happy",
  'content_type': 'application/json'

};


app.post('/api/tone', function(req, res, next) {
  toneAnalyzer.tone(req.body, function(err, data) {
    if (err) {
      console.log(err);
    } else {

      console.log(JSON.stringify(data));

  };
});

// error-handler application settings
require('./config/error-handler')(app);

module.exports = app;