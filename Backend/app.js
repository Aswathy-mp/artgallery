const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const PaintingData=require('./src/model/PaintingData')


var app=new express();

app.use(cors());
app.use(bodyParser.json());

app.get('/paintings',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // console.log('hello')
    PaintingData.find({"category":"Paintings"})
    .then((paintings)=>{
        res.send(paintings)
    });
});

app.listen(3000,function(){
    console.log('listening to port 3000')
});