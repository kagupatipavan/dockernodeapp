const express = require('express')();
express.get('/', (req, res) => {
    res.send('Hello Worldss!')
})
express.listen(1200,()=>{
    console.log("server starting");
})