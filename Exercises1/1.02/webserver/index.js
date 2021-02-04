const http = require('http')

const server = http.createServer()

server.listen(3001, ()=>{
  console.log('Server started in port 3001')
})