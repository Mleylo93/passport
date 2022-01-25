const router = require("express").Router()

router.get("/",(req,res) =>{
    const myReq = req.get
    console.log(myReq.header)
    res.status(200).json({message:"Data, delivered by json!"})
})

module.exports = router;