
const connectDb = require('./dbConnection')
const update = require('./update')
const dele = require('./delete')
const insert = require('./insertData')

const main = async () => {


  let result = await connectDb()
  let data = await result.find().toArray()
  console.log(data)
}

//insert()

//main()
//update()

//dele()


