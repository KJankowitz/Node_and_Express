import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
// gets static html file from server file path:
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended:true}));

// get Home Page
app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

// Submit form data and get hold of body with body-parser
// Return specific data from body-parser as result
app.post("/submit", (req, res) => {
  //console.log(req.body);
  res.send("<h1>Your band name is:</h1>" + "<h2>" + req.body.street + req.body.pet + "</h2>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
