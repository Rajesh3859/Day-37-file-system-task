const express = require("express");
const bodyparser = require("body-parser");
const fs = require("node:fs");
const httpserver = express();
const timestamp = new Date().toString();

httpserver.use(bodyparser.json());

httpserver.listen(3000, "0.0.0.0", () => {
  console.log("server started");
});
httpserver.get("/", function (request, response) {
  response.send(timestamp);
});

fs.appendFile("./Files/current-date-time.txt", timestamp, (err) => {
  if (err) throw err;
  else {
    console.log("File Created Successfully");
  }
});
function readAllFilesFromDir() {
  fs.readdir("./files", (err, files) => {
    if (err) console.log(err);
    if (files) console.log(files);
  });
}
readAllFilesFromDir();
