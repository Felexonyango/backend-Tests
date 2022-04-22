const express = require('express');
const router = express.Router();
const fs = require('fs')
const users = JSON.parse(fs.readFileSync('database/users.json', 'utf-8'))

/* GET users listing. */
router.get('/users', function (req, res,_next) {
    res.json(users,)
  });
  




module.exports=router