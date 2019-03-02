const express = require('express')

const reviewer = require('./routes/api/reviewer')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Reviewer page</h1>
    <a href="/api/reviewer"> View Reviewers </a>
    `);
})




// Direct routes to appropriate files 

app.use('/api/reviewer', reviewer)
//app.use('/api/create', reviewers)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 5353
app.listen(port, () => console.log(`Server up and running on port ${port}`))