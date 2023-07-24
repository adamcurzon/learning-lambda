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

module.exports = app;