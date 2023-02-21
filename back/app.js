const exp=require('express')()
exp.get('/',(req,res)=>{
    res.send('hello world')
})
exp.listen(3000,()=>{
console.log("server is running")
;
});