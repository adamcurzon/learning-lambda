// App
const express = require('express');
const app = express(); 

const routes = express.Router();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/test", (req, res) => {
  res.send("Test Page");
});

app.use(routes);

// Lambda Handler
const awsServerlessExpress = require('aws-serverless-express');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, content) => {
    return awsServerlessExpress.proxy(server, event, content);
}