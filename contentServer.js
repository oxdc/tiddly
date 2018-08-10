const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const configuration = require('./config.js')
const hostname = configuration.csHost
const port = configuration.csPort
var wl = configuration.csWhiteList
wl.push(configuration.csRoot)
const whiteList = wl
delete wl
const mimeType = configuration.mimeType

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
  if (['\\', '/'].indexOf(req.url) >= 0) {
    res.statusCode = 403
    res.end(`Forbidden`)
    return
  }
  var filepath = req.url.split(path.sep)
  for (var dir of filepath) {
    if (!dir) continue
    if (whiteList.indexOf(dir) >= 0) {
      break
    } else {
      res.statusCode = 403
      res.end(`Forbidden`)
      return
    }
  }
  const parsedUrl = url.parse(req.url)
  let pathname = `.${parsedUrl.pathname}`
  fs.exists(pathname, function (exist) {
    if(!exist) {
      res.statusCode = 404
      res.end(`File ${pathname} not found!`)
      return
    }
    if (fs.statSync(pathname).isDirectory()) {
      pathname += '/index.html'
    }
    fs.readFile(pathname, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`)
      } else {
        const ext = path.parse(pathname).ext;
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' )
        res.end(data)
      }
    })
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
