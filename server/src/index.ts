require("dotenv").config()
import express ,{Application} from "express";
import {ApolloServer} from "apollo-server-express"
import cors from "cors"

import{resolvers, typeDefs} from "./graphql"
import {connectDatabase} from "./database" 
  
const init = async (app:Application)=>{
    app.use(cors());
    const PORT = 3333;
    const db = await connectDatabase()
    const server = new ApolloServer({typeDefs, resolvers, context:()=>({db})});
    server.applyMiddleware({app, path:'/api'}) 
    app.listen(PORT, ()=>{
        console.log(`'app start on port ${PORT}`)
    })
    

}
init(express());