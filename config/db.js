import mongoose from "mongoose"
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.mongo_url)
        console.log(`connected to database ${conn.Connection.host}`)
    }
    catch(error)
    {
        console.log(`${error}`)
    }
}
export default connectDB