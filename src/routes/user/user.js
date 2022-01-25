const router =require("express").Router()
const {Sequelize}= require ("sequelize")
const passport = require ("passport")

const {registerStrategy}= require("../../middleware/auth")

const User = require("../../models/user")
const Test =require ("../../models/test")

const register = async (req, res, next)=>{
    console.log(req)
    try{
        req.user.email ? res.status(201).json({msg:"registered", user:req.user}) : res.status(401).json({msg:"User already exists"})
    } catch (error){
        next (error)
    }
}

router.post('/register', passport.authenticate("register", {session:false}), register)


router.get('/', (req,res)=> res.status(200).json({message:"User Profiles"}))
router.post('/login', (req,res)=> res.status(200).json({msg:"login"}))


router.post('/test', async (req,res)=>{
    const test =await Test.create(req.body)
    const newTest= await Test.findOne({where:{name:req.body.name}})
    const newerTest =JSON.stringify(newTest, null, 2)
    res.status(201).json({msg:`Added ${newTest.name}`})
})
module.exports =router