import { Mongoose } from "mongoose";

export const connect2db = async () => {
    const connection = {}
    
    try{

        if(connection.isConnected) return

        const db = Mongoose.connect(process.env.MONGODB_URL)
        connection.isConnected = db.connection[0].readyState
        
    }

    catch(error){
        console.log(error)

        throw new Error("Could not conect to database")
    }
}