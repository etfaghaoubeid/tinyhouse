import {MongoClient} from  "mongodb"
import { Database } from "../lib/types";

export const connectDatabase = async ():Promise<Database>=>{
   const uri:string = 'mongodb+srv://atigh:atigh@cluster0-xscdc.mongodb.net/tinyhouse';
    const mongodbClient = new MongoClient(uri,{ useUnifiedTopology: true })
    await mongodbClient.connect();
    console.log('connect to database')
    const db = mongodbClient.db('tinyhouse')
    return {
        listings:db.collection('listings')
    }
}
