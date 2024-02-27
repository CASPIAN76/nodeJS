
  const connectDb = require('./dbConnection')
 const insert = require('./insertData')

const main= async()=>{
 

  let result =  await connectDb()
  let data = await result.find().toArray()
  //console.log(data)
}


main()

insert()

