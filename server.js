const express=require('express')
const app=express()
 app.use(express.json())
 
let users=[
    {
        id:1,
        name:"amal",
        email:"amal@gamil.com"

    },
    {
        id:2,
        name:"wassim",
        email:"wassim@gamil.com"

    }
]

app.get('/users',(req,res)=>{
    res.send({msg:"list of users",users})
})
app.get('/users/:userId',(req,res)=>{
    const id =req.params.userId;
    const user=users.find(user=>user.id.toString()===id)
    if(!user){
        return res.status(404).send("user not found")
    }
    res.send({msg:"user",user})
})
app.post('/users',(req,res)=>{
    users=[...users,{...req.body,id:Date.now()}]
    res.send({msg:"user added",users})
})

app.put('/users/:userId',(req,res)=>{
    const {userId}=req.params
    users=users.map(user=>user.id==userId ? {...user,...req.body}:user) // name:"",email:""
    res.send({msg:"user updated",users})
})

app.delete('/users/:userId',(req,res)=>{
    const {userId}=req.params
    users=users.filter(user=>user.id!=userId)
    res.send({msg:"user deleted",users})
})




const port=5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})