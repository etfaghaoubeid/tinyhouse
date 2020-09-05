import React, { useState } from "react";
import { server } from "../../lib/api";
import {ListingsData, DeleteListingData, DeleteListingVariables} from "./types"
interface Props{
    title:string
}
const LISTINGS = `
   query Listings{
       listings{
        id 
        title 
        image 
        address 
        price 
        numOfGuests 
        numOfBeds 
        numOfBaths
        rating
       }
      
   }
`
const DELETE_LISTING = `
{
    mutation DeliteListing($id:ID!){
        deleteList(id:$id){
            id  
        }
    }
}


`
export function Listings ({title}:Props){
    const [listings ,setListings] = useState([])
    const [loading , setLoading] = useState(false);
    const fetchListings = async()=>{
        setLoading(!loading);
        let  {data}  = await server.fetch<ListingsData>({query:LISTINGS});
        // setListings(...data.listings)
        setLoading(!loading);

        console.log(data.listings[0].image)
    }
    const deleteListing = async ()=>{
       const {data} = await  server.fetch<DeleteListingData, 
       DeleteListingVariables>({query:DELETE_LISTING, variables:{id:"5f478a7473a782ac299e5b06"}})
       console.log(data)
    }
    return(
       
        <>
            <button onClick={fetchListings}> fetch listings</button>
            <button onClick={deleteListing}> delete listings</button>

            {loading? <h1>loding</h1>:
                ( <>
                
                    <h1>{title} </h1>
                    
                </>)
           }
            
        </>    
       
    )

};