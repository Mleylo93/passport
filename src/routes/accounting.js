const router = require ("express").Router()

router.get("/", (req,res)=>{
    res.status(200).send("welcome to accounting")
})

const positionList= ['accountant', 'clerk', 'manager']

const findPosition = (positionList)=>{
    const ranNum = Math.floor(Math.random()*3)
    return positionList[ranNum]
}

router.get("/staff/:name", (req,res)=>{
    res.status(200).json({staffMember: req.params.name, position: findPosition(positionList)})
})

router.get("/:name", (req,res)=>{
    console.log(req.params)
    res.status(200).json({message: req.params.name})
})

module.exports=router;