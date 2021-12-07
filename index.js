const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3000;


app.use(express.static(resolve(__dirname, "src")));

app.get("/", (request, response) => {
  response.sendFile(resolve(__dirname, "src", "index.html"));
});


app.listen(port, _=> console.log ("🔥🔥server up!!! in port" + port))
