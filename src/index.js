require ("dotenv").config();

const express=require("express")
const connection =require ("./db/connection")

const User = require ("./models/user")

const errorRouter =require("./routes/error")
const indexRouter =require ("./routes/index")
const accountingRouter =require('./routes/accounting')
const marketingRouter =require("./routes/marketing");
const dataRouter = require ("./routes/data")
const userRouter = require ("./routes/user/user")
const Test = require ("./models/test")
const passport = require("passport")
const {registerStrategy} = require ("./middleware/auth")

const app = express()

app.use(express.json())
app.use(passport.initialize())

app.use("/", indexRouter)
app.use("/accounting", accountingRouter)
app.use("/marketing", marketingRouter)
app.use("/data", dataRouter)
app.use("/user", userRouter)

app.use("*", errorRouter)

passport.use("register", registerStrategy)
app.listen(process.env.PORT, async()=>{
    console.log("App is listening")
    await User.sync({alter:true})
    await Test.sync({alter:true})
})