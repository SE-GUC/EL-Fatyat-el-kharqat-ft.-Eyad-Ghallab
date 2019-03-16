//

const express = require('express')

const Reviewer = require('./routes/api/reviewer')
//const admin = require('./routes/api/admin')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Reviewer page</h1>
    <a href="/api/reviewer"> View Reviewer </a>
    `);
})




// Direct routes to appropriate files 

app.use('/api/reviewer', Reviewer)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 4000
app.listen(port, () => console.log(`Server up and running on port ${port}`))