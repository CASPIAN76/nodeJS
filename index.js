
  const connectDb = require('./dbConnection')
const update = require('./update')

const main= async()=>{
 

  let result =  await connectDb()
  let data = await result.find().toArray()
  console.log(data)
}


//main()
update()



