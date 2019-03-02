const express = require('express')

const admin = require('./routes/api/admin')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Sumerge</h1>
    
    `);
})



app.use('/api/admin', admin)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 4000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
