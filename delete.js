const connectDb = require('./dbConnection');




const _delete =async ()=>{
   const res = await connectDb();
   const result= res.deleteMany({})

   if((await result).acknowledged){
    console.log("data deleted")
   }

}



module.exports = _delete
