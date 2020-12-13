var http = require("http");
var fs = require("fs");
var path = require("path");
// var url = require("url");
var querystring = require("querystring");
var obj2xml = require("object-to-xml");
const initialFile = "initial.txt";
const modifiedFile = "modified.txt";

http
  .createServer(function(req, res) {
    if (req.method == "POST") {
      var data = "";
      req.on("data", chunk => {
        data += chunk;
      });
      req.on("end", chunk => {
        var formdata = querystring.parse(data);
        console.log(formdata);
        let text = `${formdata.text}\n${formdata.datalist}\n${formdata.email}\n${formdata.sex}`;
        saveToFile(initialFile, text);
        saveToFile(modifiedFile, obj2xml(formdata));
      });
    }

    if (req.url === "/read") {
      console.log("Server received request");
      let fileData = { initial: "", modified: "" };
      fs.readFile("./" + initialFile, { encoding: "utf-8" }, function(
        err,
        data
      ) {
        if (err) {
          console.log(err);
        }
        fileData.initial = data;
        fs.readFile("./" + modifiedFile, { encoding: "utf-8" }, function(
          err,
          data
        ) {
          if (err) {
            console.log(err);
          }
          fileData.modified = data;
          // console.log(fileData);
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(fileData));
        });
      });
    }
  })
  .listen(8000, () => console.log("Server started on 8000"));

var saveToFile = (path, data) => {
  fs.writeFile("./" + path, data, error => {
    if (error) {
      throw error;
    }
    console.log(`File ${path} was successfully created !`);
  });
};
