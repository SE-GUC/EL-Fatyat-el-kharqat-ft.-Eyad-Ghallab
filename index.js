
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const reviewers = require("./routes/api/reviewers");
const notificatioins = require("./routes/api/notifications");

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
mongoose.set("useCreateIndex", true);

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//entry point
app.get('/',(req,res)=> res.send('<h1>welcome</h1>'))
app.get('/test',(req,res)=> res.send('<h1>Deployed on Herouko</h1>'))



// Use routes
app.use("/api/reviewers", reviewers);
app.use("/api/notifications", notificatioins);

app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
