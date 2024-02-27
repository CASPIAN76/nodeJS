const  {MongoClient}= require('mongodb')

const url="mongodb://127.0.0.1:27017"

const client= new MongoClient(url)


async function connectDb(){
 const connection = await client.connect()
 const db =   connection.db('e-comm')
  return db.collection('products')
}


module.exports = connectDb;