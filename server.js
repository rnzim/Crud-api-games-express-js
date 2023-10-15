const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({extended:false}))

app.listen(5,()=>{
    console.log('api run')
})

module.exports = app