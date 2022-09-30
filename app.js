const express = require('express')
const data = require('./data.json')

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/api', (req, res) => {
 res.send(data)
})



app.listen(4000, () => {
    console.log(`server is listening to 4000`);
})