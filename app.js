
const express = require('express'); // imports express framework
const sls = require('serverless-http'); //imports serverless-http package
const app = express(); //creates new express application
app.get('/', async (req, res, next) => {  // creates a new route handler for the root path
  res.status(200).send('Hello World') // exports the Express application wrapped in the serverless-http middleware. This will allow to deploy your Express server to AWS Lambda.
});
module.exports.server = sls(app);
