const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const userModel = require('./model/userSchema')
//userSchema is file name inside the model which is stored in usermodelname (which is user defined)
app.use(express.json())
app.use(cors())
 mongoose.connect("mongodb+srv://jeyamaha98:jeyamaha@cluster0.r9yfyga.mongodb.net/crud")
app.get('/', (req,res)=>{
    userModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/createuser', async (req,res)=>{
    try{
        await userModel.create(req.body)
        return  res.status(200).json({message:"Data Inserted"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
       }
})
//it stores the data which comes from the client
app.get('/getuser/:id',(req, res) => {
    const id = req.params.id;
    userModel.findById({_id:id})
  .then(users => res.json(users)) 
  .catch(err=>console.log(err))
})
//it find the user data from the users collection by id and send it to the client
app.put('/updateuser/:id', (req, res) => {
    const id = req.params.id;
    const {name,email,age} = req.body;
    userModel.findByIdAndUpdate({_id:id},{name,email,age})
    .then((user) => res.json(user))
    .catch((err) =>console.error(err))
})
//it find the user by id and update the user information accordingly we given in the frontend
//name,email,age

app.delete('/deleteuser/:id',(req, res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then((user) => res.json(user))
    .catch((err)=>console.error(err))

})
app.listen(5000,()=> console.log('listening on port 5000'))