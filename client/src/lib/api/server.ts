interface Body{
    query:string
}
export const server = {
    fetch: async (body:Body)=>{
        const res= await fetch('http://localhost:3333/api' , {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        });

    }
}