const bcrypt = require ("bcrypt")
const LocalStrategy =require ("passport-local").Strategy

const User = require ("../models/user")
const mappings ={usernameField:"email", passwordField:"password"}


//hash function-

const register = async(email, password, next)=>{
    console.log("strategy register hit")
    try {
        if (!email || !password){
            throw new Error ("User info missing")
        }

        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
        const passwordHash= await bcrypt.hash(password,salt)

        try {
            const user = await User.create({email: email, passwordHash: passwordHash})
            next (null, user)
            
        } catch (error) {
            next (error, {})
            
        }
        
    } catch (error) {
        next (error)
        
    }
}


const registerStrategy = new LocalStrategy (mappings, register)




module.exports={
    registerStrategy
}