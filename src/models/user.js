const {DataTypes} = require("sequelize")
const connection =require("../db/connection")

const User =connection.define("User",
{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    passwordHash:{
        type:DataTypes.STRING,
        allowNull:false
    },
},
    {
        indexes:[{unique:true, fields:["email"]}]
    }
)
module.exports= User;