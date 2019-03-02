const express = require('express')

const SSC = require('./routes/api/SSC')
const reviewer = require('./routes/api/reviewer')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {

    res.send(`<h1>Welcome</h1>
    <a href="/api/SSC">SSC FORM</a>
    `);
})



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





const investor = require('./routes/api/investor')

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Sumerge</h1>
    <a href="/api/investor">investors</a>
    
    `);
})
app.use('/api/investor', investor)


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



