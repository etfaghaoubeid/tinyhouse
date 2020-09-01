import React from "react";
interface Props{
    title:string
}
export function Listings ({title}:Props){
    return(
        <h1>{title} </h1>
    )

}