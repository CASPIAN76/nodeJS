const connectDb = require('./dbConnection');

const update=async()=>{

    const result = await connectDb()
    const res = result.updateOne({name:"Apple"}, {$set:{owner:"caspian" , status:false}})
    if((await res).acknowledged){
        console.log("updated")
    }
}


module.exports= update