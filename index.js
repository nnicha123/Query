const express = require('express')
const app = express()

app.post('/',(req,res) => {
    res.status(201).send({message:'Posted'})
})
app.get('/contact',(req,res) => {
    console.log(req.query)
    res.status(200).send(req.query)
})
app.get('/add',(req,res) => {
    const added = Number(req.query.a) + Number(req.query.b)
    res.status(200).send({message:'a + b = ' + added})
})
app.get('/message',(req,res) => {
    const rounds = req.query.times
    const message = req.query.message
    let str = ''
    for(let i=0;i<rounds;i++){
        str += message + ' '
    }
    res.status(200).send({message:str})
})
app.listen(8000,() => console.log('Listening on port 8000'))