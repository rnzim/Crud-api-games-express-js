const app = require('./server')
const Games = require('./database/Games')
const connection = require('./database/database')


connection.authenticate().then(()=>{
    console.log('success database')
}).catch((err)=>{
    console.log('err in authenticate: '+ err)
})

app.get('/Games',(req,res)=>{
    Games.findAll().
    then((name)=>{
        if(name == null){
            res.sendStatus(404)
        }else{
            res.json({name})
        }
        
         
      }).catch((err)=>{
        res.sendStatus(500)
      })
    
      
})


app.get('/games/:id?',(req,res)=>{
    var id = parseInt(req.params.id)
 
        Games.findOne({where:{id:id}}).
        then((name)=>{
            
            res.json(name)
            
        }).catch((err)=>{
            res.sendStatus(500)
        })

})

app.post('/Games',(req,res)=>{
    var {name,author,ano,pricing} = req.body.name
  
     Games.create({
        name:name,
        author:author,
        ano:ano,
        pricing:pricing
     }).then(()=>{
        res.sendStatus(200)
     }).catch((err)=>{
        console.log('erro '+ err )
        res.sendStatus(400)
     })
})
app.delete('/games/:id',(req,res)=>{
    var id = req.params.id
    Games.destroy({where:{
       id:id
    }}).then(()=>{
        res.sendStatus(200)
    }).catch(()=>{
        res.sendStatus(500)
    })
})

