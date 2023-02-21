const ex=require('express')();
ex.get('/',(req,res)=>{
    res.send("hello")
})
ex.listen(1111,()=>{
    console.log("server is running")
})