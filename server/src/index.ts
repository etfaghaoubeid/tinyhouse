import express from "express";
const Port : number = 3333;
import userRoutes from "./routes/user"
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json())
app.use('/user', userRoutes);

app.get('/', (req, res)=>{
    res.send('hello')
})


app.listen(Port, ()=>{
    console.log('app start on port 3333')
})