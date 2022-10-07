const express = require('express');
const router =express.Router();
const jwt = require("jsonwebtoken")
const { verifys } = require('../Function/verify');
const { User } = require('../Function/Models/User');
const { Repo } = require('../Function/Models/Reposchema');
const { hashcompare } = require('../Function/PasswordHashing');
let Token="fdgdfgdfg"
router.get("/",async(req,res)=>{
    res.send("hello this is host")
})


   
   


module.exports = router;