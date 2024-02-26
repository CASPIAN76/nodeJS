const  {MongoClient} = require("mongodb")
const path= "mongodb://127.0.0.1:27017"
const client= new MongoClient(path)


async function getData(){

    const result = await client.connect()
  const v1 = await result.db('e-comm').collection('products').find({name:"opp"}).toArray()
 
  console.log(v1, "jhsdj")
}

getData()