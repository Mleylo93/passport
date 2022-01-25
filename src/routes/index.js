const router = require ("express").Router();

router.get("/", (req,res)=>{
    const queries = req.query;
    for (let q in queries){
        if (q[0] === "_"){
            delete req.query[q]
        }
    }
    res.status(200).json({query:queries})
    console.log(req.query)
})

module.exports =router;