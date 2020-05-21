const express = require('express')
const router = new express.Router()

const User = require('../models/user')
const auth = require('../middleware/auth')


router.post('/users',async (req,res)=>{
    try {
        const user = new User(req.body)
        const token = await user.generateAuthToken()

        await user.save()
        res.status(201).send({user,token})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async (req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findByCredentials(email,password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch (error) {
        res.status(400).send()
    }
})

router.get('/users/me',auth, async (req,res)=>{
    
    res.send(req.user)
})



module.exports = router