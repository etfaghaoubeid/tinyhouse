import React from "react";
import { server } from "../../lib/api";
interface Props{
    title:string
}
const LISTINGS = `
   query Listings{
       listings{
        id 
        image 
        price

       }
      
   }
`
export function Listings ({title}:Props){
    const fetchListings = async()=>{
        const res  = await server.fetch({query:LISTINGS});
        const listings = await  res.json()
        console.log(listings)
    }
    return(
        <>
        <h1>{title} </h1>
        <button onClick={fetchListings}> fetch listings</button>
        </>
    )

};