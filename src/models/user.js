const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        email:{
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid')
                }
            }
        },
        password:{
            type: String,
            required: true,
            minlength: 7,
            trim: true,
            validate(value){
                if(value.toLowerCase().includes('password'){
                    throw new Error('password cannot contain password')
                })
            }
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ]
        
    },
    {
        timestamps: true
    }
)

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign(
        { _id: user._id.toString()},
        process.env.JWT_SECRET
    )

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}


const User = mongoose.model('User',userSchema)

module.exports = User