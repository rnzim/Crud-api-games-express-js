const Sequelize = require('sequelize')

const connection = new Sequelize('games','root','',{
    dialect:'mysql',
    host:'localhost',
    timezone:'-03:00'
})

module.exports = connection