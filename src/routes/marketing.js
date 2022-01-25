const router = require ("express").Router()

router.get("/", (req,res)=>{
    res.status(200).send("welcome to marketing")
})

module.exports =router;