let express = require('express');
let app = express();

const filePath = __dirname + "/views/index.html"
let publicFolderPath = __dirname + "/public"

app.use("/public", express.static(publicFolderPath))

app.get("/", (req, res) => {
  res.sendFile(filePath)
})

app.get("/", (req, res) => {
    res.send("Hello Express")
  })

app.get("/json", logger)

app.get("/json", (req, res) => {
    let result = {"message": "Hello json"} 
    const msgStyle = process.env.MESSAGE_STYLE
    
    if (msgStyle === "uppercase") {
      result.message = result.message.toUpperCase()  
    }

    res.json(result)
  })

app.get("/now", (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.send({"time": req.time})
})

function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
  }






























 module.exports = app;
