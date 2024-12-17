console.log('server');
const express = require('express');
const app = express ();
const port = 3000;

app.use(express.static('public'));

const myFoods = require('./data/database.js');

app.get('/', (req, res) =>{
    res.send('Server del mio blog');
})

app.get('/bacheca', (req, res) =>{
    res.json(myFoods);
})







app.listen(port, () => {
    console.log(`Il server sta girando su http://localhost:${port}`);
})