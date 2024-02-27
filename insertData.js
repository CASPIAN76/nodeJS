const connectDb= require('./dbConnection')

const insert = async () => {
    const res = await connectDb()
    const data =await res.insertMany([
        { name: "motorola", price: 150, category:"Mobile" },
        { name: "Apple", price: 80, category:"Mobile" },
        { name: "MAX", price: 30, category:"Mobile" },
        { name: "LENOVO", price: 20, category:"Laptop" },
     ] )

    if (data.acknowledged){
        console.log("data is insetrted")
    }

}





module.exports= insert