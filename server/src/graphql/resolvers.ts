import { listings} from "../listings";
import {IResolvers} from 'apollo-server-express'
import {connectDatabase} from "../database"

export const resolvers:IResolvers = {
    Query:{
        listings:async ()=>{
            let l = await connectDatabase();
            let r = await l.listings.find({}).toArray()
            console.log(r ,"[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]")

            return listings;

        }
    },
    Mutation:{
        deleteList:(_root:undefined , {id}:{id:string})=>{
            for(let i =0; i<listings.length;i++){
                if(listings[i].id ==id){
                    return listings[i];
                }
            }
            throw new Error('list not found')
        }
    }

};