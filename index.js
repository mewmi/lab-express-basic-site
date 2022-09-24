const express = require("express");
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");
const app = express();

app.set("view engine", "hbs");

app.set("views", __dirname + "/views");

app.use(express.static("public"));

const moves = [
  {
    level: "1",
    move: "Play Nice",
    type: "Normal",
    power: "-",
    Acc: "-%",
    pp: "20",
  },
  {
    level: "1",
    move: "Sweet Kiss",
    type: "Fairy",
    power: "-",
    Acc: "75%",
    pp: "10",
  },
  {
    level: "1",
    move: "Nuzzle",
    type: "Electric",
    power: "20",
    Acc: "100%",
    pp: "20",
  },
  {
    level: "1",
    move: "Thunder Shock",
    type: "Eelctric",
    power: "40",
    Acc: "100%",
    pp: "30",
  },
  {
    level: "1",
    move: "Quick Attack",
    type: "Normal",
    power: "40",
    Acc: "100%",
    pp: "30",
  },
  {
    level: "20",
    move: "Spark",
    type: "Electric",
    power: "65",
    Acc: "100%",
    pp: "20",
  },
  {
    level: "32",
    move: "Discharge",
    type: "Electric",
    power: "80",
    Acc: "100%",
    pp: "15",
  },
  {
    level: "36",
    move: "Thunderbolt",
    type: "Electric",
    power: "90",
    Acc: "100%",
    pp: "15",
  },
  {
    level: "44",
    move: "Thunder",
    type: "Electric",
    power: "110",
    Acc: "70%",
    pp: "10",
  },
];

app.get("/", (request, response) => {
  response.render("homepage");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/works", (request, response) => {
  response.render("works", moves);
});

app.get("/photogallery", (request, response) => {
  response.render("photogallery");
});

app.listen(3002);
