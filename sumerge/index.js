
const express = require('express')
const admin = require('./routes/api/admin')
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Sumerge</h1>
    

const Form = require('./routes/api/spc')



app.use('/api/spc', Form)


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


const SSC = require('./routes/api/SSC')
const reviewer = require('./routes/api/reviewer')



app.use('/api/admin', admin)

app.use('/api/SSC', SSC)


    res.send(`<h1>Welcome to Reviewer page</h1>
    <a href="/api/reviewer"> View Reviewers </a>
    `);
})


app.use('/api/reviewer', reviewer)



const Lawyer= require('./routes/api/Lawyer')

app.use('/api/Lawyer', Lawyer)


app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })


// const port = 4000
// app.listen(port, () => console.log(`Server up and running on port ${port}`))





const investor = require('./routes/api/investor')

app.use('/api/investor', investor)

