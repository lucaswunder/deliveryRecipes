const server = require('./server')

server.listen(process.env.SERVER_PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port: ${process.env.SERVER_PORT}`)
})

module.exports = server
