
const express = require('express')
const Lawyer= require('./routes/api/Lawyer')
const app = express()
app.use(express.json())

app.use('/api/Lawyer', Lawyer)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

const investor = require('./routes/api/investor')

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Sumerge</h1>
    <a href="/api/investor">investors</a>
    
    `);
})
app.use('/api/investor', investor)


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

