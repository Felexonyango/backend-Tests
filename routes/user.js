const express = require('express');
const router = express.Router();
const fs = require('fs')
const users = JSON.parse(fs.readFileSync('database/users.json', 'utf-8'))

router.get('/test',(req,res,_next)=>{
    return res.status(200).json({message:'Testing'});
})

/* GET users listing. */
router.get('/users',(req, res,_next)=> {
    res.json(users,)
  });
  




module.exports=router