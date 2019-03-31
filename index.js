
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const spcforms = require('./routes/api/SPC')

const Admin = require("./routes/api/Admin");
const updateSSC = require('./routes/api/SSC')
const Reviewer = require('./routes/api/Reviewer')
const investor = require('./routes/api/investor')
const Lawyer= require('./routes/api/Lawyer')
const Comment = require("./routes/api/Comment");

const Notification = require("./routes/api/Notification");
const ExternalEntities = require('./routes/api/ExternalEntities')

const app = express()
const db = require('./config/keys').mongoURI

mongoose
  .connect(db, { useNewUrlParser: true }) 
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
mongoose.set("useCreateIndex", true);





    app.use(express.json())
    app.use(express.urlencoded({extended: false}))




app.get('/', (req,res) => res.send(`<h1>Sumerge </h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))
app.use(bodyParser.json());

app.use('/api/SSC', updateSSC)
app.use('/api/Reviewer', Reviewer)
app.use('/api/investors',investor )
app.use('/api/Lawyer', Lawyer)
app.use('/api/Admin', Admin)

app.use("/api/Comment", Comment);

app.use('/api/ExternalEntities', ExternalEntities)


app.use("/api/Notification", Notification);
app.use('/api/SPC', spcforms)

app.use(express.json())
app.use(express.urlencoded({extended: false}))





app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))
const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`Server started on port ${port}`));
