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


































 module.exports = app;
