import mongoose from 'mongoose'
let connected=false;
export const connectToDB=async()=>{
    mongoose.set("strictQuery",true)
    if(connected){
        console.log("already connected")
        return ;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_prompt",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        connected=true
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}