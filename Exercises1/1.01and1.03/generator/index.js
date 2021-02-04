const crypto = require('crypto')

const randomString = `${crypto.randomBytes(8).toString('hex')}-${crypto.randomBytes(4).toString('hex')}-${crypto.randomBytes(4).toString('hex')}-${crypto.randomBytes(4).toString('hex')}-${crypto.randomBytes(4).toString('hex')}-${crypto.randomBytes(8).toString('hex')}`

const printer =()=>{
  const date = new Date().toUTCString()
  console.log(`${date}: ${randomString}`)
}

setInterval(()=>{
  printer()
},5000)