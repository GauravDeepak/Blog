var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send("hello word");
})
app.listen(2300,()=>{
    console.log('server is running on port no 2300');
})