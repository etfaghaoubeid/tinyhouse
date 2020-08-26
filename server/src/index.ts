import express ,{Application} from "express";
import {ApolloServer} from "apollo-server-express"

import{resolvers, typeDefs} from "./graphql"
import {connectDatabase} from "./database"



const init = async (app:Application)=>{
    const db = await connectDatabase()
    const Port : number = 3333;
    const server = new ApolloServer({typeDefs, resolvers, context:()=>({db})});
    server.applyMiddleware({app, path:'/api'}) 
    app.listen(Port, ()=>{
        console.log('app start on port 3333')
    })
    

}
init(express())