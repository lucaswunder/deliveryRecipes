require('dotenv').config();

const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.exception()
    this.middlewares()
    this.logger()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json());
  }

  logger () {
    const accessLogStream = fs.createWriteStream(path.join(process.env.SERVER_LOGS_PATH, 'access.log'), { flags: 'a' })
    this.express.use(morgan('combined', { stream: accessLogStream }));
  }

  routes () {
    this.express.use(routes);
  }

  exception () {
    this.express.use(async (err, req, res, next) => {
      let title = 'Internal Server Error';

      if(err.name === 'Validation') title = "Validation";
      return res.status(err.status || 500).json({ error: title, details:err })
    })
  }
}

module.exports = new App().express;
