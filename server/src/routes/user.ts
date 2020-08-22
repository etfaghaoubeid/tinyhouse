import {Router} from 'express';
import { listings } from '../listings';
const router = Router();
 


router.get('/listings',(req,res)=>{
    res.send(listings)
});
router.post('/listings/:id', (req, res)=>{
    const id:string = req.params.id;
    for(let i= 0 ; i<listings.length;i++){
        if(listings[i].id == id)
       return res.send(listings.splice(i,1))
    }
    return res.send('faild to detete ')
})
router.get('/login', (req,res)=>{
    res.send("login")
})
 
export default router;