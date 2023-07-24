const express = require('express');
const app = express(); 

const routes = express.Router();

app.get("/", (res, req) => {
  res.body("123");
});
app.use(routes);

module.export = app;
