const express=require('express')
const app=express()

const logger=(req,res,next)=>{
    console.table({method:req.method})
    console.table({url:req.url})
    next()
}

app.use(logger)

app.use(express.static("Public"))

// app.get('/',(req,res)=>{ 
//     res.sendFile(__dirname+"/Public/index.html")
// })
// app.get('/css/style.css',(req,res)=>{
    
//     res.sendFile(__dirname+'/Public/css/style.css')
// })
// app.get('/services',(req,res)=>{
  
//     res.sendFile(__dirname+"/Public/services.html")
// })

// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })
// app.get('/services',(req,res)=>{
//     res.send("services page")
// })



const port=5000
app.listen(port,()=>{
console.log(`server running on port ${port}`)
})