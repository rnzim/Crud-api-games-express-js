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

app.post('/games',(req,res)=>{
    var name = req.body.name
    var author = req.body.author
    var ano = req.body.ano
    var pricing = req.body.pricing
   
     
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

app.put('/games/:id',(req,res)=>{
    var {name,ano,author,pricing} = req.body

    
    var id = req.params.id
    Games.update({name:name,ano:ano,author:author,pricing:pricing},
        {where:{id:id}}).then(()=>{
            res.sendStatus(200)
            console.log('sucess update')
        }).catch(err=>{
            res.send(500)
            console.log(err)
        })
})

