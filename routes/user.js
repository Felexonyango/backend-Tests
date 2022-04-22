const express= require('express')
const User = require('../model/user')
const router =express.Router()

router.get('/user',async(req, res)=>{
    try{
        const user = await User.find({})

        if(user){
            res.status(200).json(user)

        }
     
    }
    catch(err){
  console.log(err)
    }
})


router.post("/user",async(req,res)=>{
    try{
 const {name,email} = req.body
 const user =  await User({
    name,
    email
})
 await user.save()
 res.status(200).json(user)

    }
    catch(err){
console.log(err)

    }
})

router.get('/user/:id',async(req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(user){
            res.status(200).json(user)
        }
    }
    catch(err){
        console.log(err)
    }
    
})





module.exports =router