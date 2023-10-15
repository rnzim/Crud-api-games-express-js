const connection = require('./database')
const Sequelize = require('sequelize')

const Games = connection.define('games',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    author:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ano:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pricing:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Games.sync({force: false})
module.exports = Games