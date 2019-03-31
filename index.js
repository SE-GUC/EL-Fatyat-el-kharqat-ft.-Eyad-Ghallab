var dotenv = require('dotenv');
const cors = require('cors')

const express = require("express");
const mongoose = require("mongoose");
//const passport = require('passport');
const bodyParser = require("body-parser");

const app = express()
const spcforms = require('./routes/api/SPC')


const Admin = require("./routes/api/Admin")

const Payment = require("./routes/api/payment");

const updateSSC = require('./routes/api/SSC')
const Reviewer = require('./routes/api/Reviewer')

const investor = require('./routes/api/investor')
const Lawyer= require('./routes/api/Lawyer')


const Comment = require("./routes/api/Comment");

dotenv.config();


//const books = require('./routes/api/books')



app.use(express.json())
app.use(express.urlencoded({extended: false}))






const Notification = require("./routes/api/Notification");

const Contract=require("./routes/api/Contract")

const ExternalEntities = require('./routes/api/ExternalEntities')



var url = process.env.MONGOLAB_URI;
// const db = require('./config/keys').mongoURI

mongoose
  .connect(url, { useNewUrlParser: true }) 
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
mongoose.set("useCreateIndex", true);



// Init middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


// Entry point
app.get('/', (req,res) => res.send(`<h1>Welcome To Your Companies</h1>
<a href="/api/SPC"> My Companies</a>`))

app.use(cors());



    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
app.use(cors());



app.get('/', (req,res) => res.send(`<h1>Welcome </h1>
<a href="/api/SSC"> Your Companies</a>`))

app.get('/', (req,res) => res.send(`<h1>Sumerge </h1>`))

app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))
app.use(bodyParser.json());

app.use('/api/SSC', updateSSC)
app.use('/api/Reviewer', Reviewer)
app.use('/api/investors',investor )
app.use('/api/Lawyer', Lawyer)
app.use('/api/Admin', Admin)

app.use("/api/Comment", Comment);

app.use("/api/Contract", Contract);

app.use("/api/Payment", Payment);
app.use('/api/ExternalEntities', ExternalEntities)


//app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))


//const port = process.env.PORT || 3000
//app.listen(port, () => console.log(`Server on ${port}`))


app.use("/api/Notification", Notification);
app.use('/api/SPC', spcforms)






app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))
const port = process.env.PORT || 3000;



app.listen(port, () => console.log(`Server started on port ${port}`));
