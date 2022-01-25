const {DataTypes} = require("sequelize")
const connection =require("../db/connection")


const Test = connection.define("test",{
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    }
})

module.exports = Test