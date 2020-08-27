import {IResolvers} from 'apollo-server-express'
import { Database } from '../../../lib/types';
import {ObjectId} from "mongodb"
import {Listing} from "../../../lib/types"


export const ListingResolvers:IResolvers = {
    Query:{
        listings:async (_root:undefined, _args:{}, {db}:{db:Database}):Promise<Listing[]>=>{
            try{
                return await db.listings.find({}).toArray()

            }catch{
                throw new Error('cant not find listngs')
            }
        }
    },
    Mutation:{
        deleteList:async (_root:undefined , {id}:{id:string}, {db}:{db:Database}):Promise<Listing>=>{
            const deletedListing =  await db.listings.findOneAndDelete({_id:new ObjectId(id)})
            if(!deletedListing.value){
                throw new Error('id does not exist')
            }
            return deletedListing.value;
        }
    },
    Listing:{
        id:(listing:Listing):string =>listing._id.toString()
    }

};