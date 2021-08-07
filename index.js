const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let answer;
let button;
let randomNumber;
let result;
let route = "/";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/public"));

app.listen(3000, function() {
  console.log("Server is running on port number 3000");
});

app.get("/", function(req, res) {
  button = "Submit";
  randomNumber = randomNumberGenerator();
  result = "";
  route = "/"
  console.log(result);
  res.render("quiz", {
    button: button,
    randomNumber: randomNumber,
    result: result,
    route: route
  });
});

app.post("/", function(req, res) {
  answer = req.body.answer;
  result = checkAnswer(answer.toLowerCase());
  res.redirect("/result");
});

app.get("/result", function(req, res) {
  button = "Next";
  route = "/result"
  res.render("quiz", {
    button: button,
    randomNumber: randomNumber,
    result: result,
    route: route
  });
});

app.post("/result", function(req, res) {
  res.redirect("/");
});

function randomNumberGenerator() {
  randomNumber = Math.ceil(Math.random() * 10);
  return randomNumber;
};

function checkAnswer(answer) {
  let result;

  switch (answer) {
    case "takashi":
      result = "images/correct.svg";
      break;
    case "reiko":
      result = "images/correct.svg";
      break;
    case "touko":
      result = "images/correct.svg";
      break;
    case "shigeru":
      result = "images/correct.svg";
      break;
    case "kaname":
      result = "images/correct.svg";
      break;
    case "tooru":
      result = "images/correct.svg";
      break;
    case "shuuichi":
      result = "images/correct.svg";
      break;
    case "jun":
      result = "images/correct.svg";
      break;
    case "seiji":
      result = "images/correct.svg";
      break;
    case "madara":
      result = "images/correct.svg";
      break;
    default:
      result = "images/wrong.svg"
  }

  return result;
}
