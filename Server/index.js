var dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();
const spcforms = require("./routes/api/SPC");
const Admin = require("./routes/api/Admin");
const Payment = require("./routes/api/payment");
const updateSSC = require("./routes/api/SSC");
const Reviewer = require("./routes/api/Reviewer");
const investor = require("./routes/api/investor");
const Lawyer = require("./routes/api/Lawyer");

const Comment = require("./routes/api/Comment");

const user = require("./routes/api/user");

const multer = require("multer");
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

//const books = require('./routes/api/books')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Notification = require("./routes/api/Notification");
const Contract = require("./routes/api/Contract");
const ExternalEntities = require("./routes/api/ExternalEntities");

dotenv.config();

var url = process.env.MONGOLAB_URI;
// const db = require('./config/keys').mongoURI
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
mongoose.set("useCreateIndex", true);

// Init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());

require("./config/passport")(passport);

// Entry point
app.get("/", (req, res) =>
  res.send(`<h1>Welcome To Your Companies</h1>
<a href="/api/SPC"> My Companies</a>`)
);
app.get("/", (req, res) =>
  res.send(`<h1>Welcome </h1>
<a href="/api/SSC"> Your Companies</a>`)
);
app.get("/", (req, res) => res.send(`<h1>Sumerge </h1>`));
app.get("/test", (req, res) => res.send(`<h1>Deployed on Heroku</h1>`));

app.use(bodyParser.json());
app.use("/api/SSC", updateSSC);
app.use("/api/Reviewer", Reviewer);
app.use("/api/investor", investor);
app.use("/api/Lawyer", Lawyer);
app.use("/api/Admin", Admin);
app.use("/api/Comment", Comment);
app.use("/api/Contract", Contract);
app.use("/api/Payment", Payment);
app.use("/api/ExternalEntities", ExternalEntities);
app.use("/api/user", user);
// SET STORAGE
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

var upload = multer({ storage: storage });

app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});
app.post("/uploadfile", upload.single("myFile"), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString("base64");
  // Define a JSONobject for the image attributes for saving to database

  var finalImg = {
    contentType: req.file.mimetype,
    image: new Buffer(encode_image, "base64")
  };
  db.collection("quotes").insertOne(finalImg, (err, result) => {
    console.log(result);

    if (err) return console.log(err);

    console.log("saved to database");
    res.redirect("/");
  });
  if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  app.get("/myFile/:id", (req, res) => {
    var filename = req.params.id;

    db.collection("mycollection").findOne(
      { _id: ObjectId(filename) },
      (err, result) => {
        if (err) return console.log(err);

        res.contentType("image/jpeg");
        res.send(result.image.buffer);
      }
    );
  });
});

//app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

//const port = process.env.PORT || 3000
//app.listen(port, () => console.log(`Server on ${port}`))

app.use("/api/Notification", Notification);
app.use("/api/SPC", spcforms);

app.use((req, res) =>
  res.status(404).send(`<h1>Can not find what you're looking for</h1>`)
);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
