const express=require('express');
const app = express();
// const cors = require('cors')
require('dotenv').config({path:"./config/.env"})

const connectDB= require("./config/connectDB")
connectDB()
const User= require('./model/User');
// const router = require('./routes/users');

// const userRouter = require('./routes/users');
// app.use('/users',userRouter)
//  app.use(cors())
app.use(express.json())
//Post request//
app.post('/user/add',async(req,res)=>{
    const {name,email,phone}=req.body
    const newUser= new User({name,email,phone})
    try{
        await newUser.save();
        res.send(newUser)
    }catch(error)
    {
        res.send(error.message)
    }
})
//Get Users//
app.get('/users/get',async(req,res)=>{
    try{
        const users=await User.find()
        res.send(users)

    }catch(error){
        res.send(error.message)
    }
})

//Get One User//
app.get('/user/get/:id',async (req,res)=>{
    try{
const user= await User.findById(req.params.id)
res.send(user)
    }
    catch(error){
        res.send(error.message);
    }
})


//delete //
app.delete('/user/delete/:id',async(req,res)=>{
    try{
const deletedUser= await User.findByIdAndDelete(req.params.id)
res.send("Bye Bye")
    }
    catch(error){
        res.send(error.message)
    }
})
//Put//
app.put('/user/put/:id',async(req,res)=>{
    try{
const updateUser= await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
res.send(updateUser)
    }
    catch(error){
        res.send(error.message)
    }
})

const PORT= process.env.PORT||5000
app.listen(PORT,(err)=>err?
console.log(err):console.log(`server is listenning on PORT ${PORT}`));
