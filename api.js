
const express = require('express');
const app = express()
const db = require('./dbConnection')

// for id

const mongodbId = require('mongodb') 

app.use(express.json())


//get api
app.get('/', async (req, res) => {
    const data = await db()
    const result = await data.find().toArray()
    res.send(result)

})

// post api
app.post('/post', async (req, res) => {
    console.log(req.body)
    const data = await db()
    const result = await data.insertOne(req.body);
    res.send(req.body)
})

// put api
app.put("/", async (req, res) => {
    const data = await db();
    //  const update = await data.updateOne({name:req.params.name}, {$set : req.body})
    const update = await data.updateMany({}, { $set: { status: req.body.status } })

    res.send({ stat: "updated" })
})


app.delete('/', async (req, res) => {
    const data = await db()
   // const result = await data.deleteOne({ _id:new mongodbId.ObjectId(req.params.id)})
   const result = await data.deleteMany({})
   res.send("deleted all")
})


app.listen(1000)