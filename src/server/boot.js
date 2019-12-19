const path = require('path');
const http = require('http');
const express = require('express');
const devMiddlware = require('./dev-middleware');
const {config} = require('./config');

const app = express();
const buildPath = path.join(__dirname, '../../build/');

app
  .disable('x-powered-by')
  .use(devMiddlware)
  .use(express.static(buildPath))
  .get('/', (req, res) => res.sendFile(buildPath + 'index.html'))
  .get(/(\d{3})/, (req, res) => {
    const path = req.params['0'];
    const statusCode = http.STATUS_CODES[path] || 404;
    res.sendStatus(statusCode);
  })
  .listen(config.port, () => console.log(`http-trainer is listening on port ${config.port}`));
