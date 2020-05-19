const express = require('express')
const router = new express.Router()

const auth = require('../middleware/auth')


router.get('/users',(req,res)=>{
    res.status(400).send({msg:'Getting started'})
})

module.exports = router