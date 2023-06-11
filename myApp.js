let express = require('express');
let app = express();

const filePath = __dirname + "/views/index.html"

app.get("/", (req, res) => {
  res.sendFile(filePath)
})

app.get("/", (req, res) => {
    res.send("Hello Express")
  })


































 module.exports = app;
