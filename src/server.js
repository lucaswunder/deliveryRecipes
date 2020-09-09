require('dotenv').config();

const express = require('express');
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

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
    var accessLogStream = fs.createWriteStream(path.join(process.env.SERVER_LOGS_PATH, 'access.log'), { flags: 'a' })
    this.express.use(morgan('combined', { stream: accessLogStream }));
  }

  routes () {
    this.express.use(require('./routes'));
  }

  exception () {
    this.express.use(async (err, req, res, next) => {
      let title = 'Internal Server Error';

      if(err.name == 'Validation') title = "Validation";
      return res.status(err.status || 500).json({ error: title, details:err })
    })
  }
}

module.exports = new App().express;
