const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const forms = require("./routes/api/forms");

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

// Use routes
app.use("/api/forms", forms);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
