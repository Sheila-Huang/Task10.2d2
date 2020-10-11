const express=require("express")
const bodyParser=require("body-parser")
const mongoose = require('mongoose')
const morgan = require('morgan');
const https=require("https")

const cors=require("cors")
const fileUpload=require('express-fileupload')
var assert=require('assert')

const Work = require('./models/Work')
const Detail=require('./models/Detail')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

const DB_URL = 'mongodb://localhost:27017/iCrowdTaskDB';
mongoose.connect(DB_URL,{ useNewUrlParser: true ,useUnifiedTopology:true});



app.route('/work')
.get((req,res)=>{

  Work.find((err,workList)=>{
      if(err) {res.send(err)}
      else {res.send(workList)}
          })

  
  })
  app.route('/detail')
  .get((req,res)=>{

    Detail.find((err,detailList)=>{
        if(err) {res.send(err)}
        else {res.send(detailList)}
            })
  
   
    })
  app.post('/request',(req,res)=>{
    
    const work=new Work({
        
        //taskType:req.body.Task,
    taskTitle:req.body.taskTitle,
    taskDescri:req.body.taskDescri,
    taskDate:req.body.taskDate,
    // masterRequire:req.body.require,
    // reward:req.body.reward,
    // number:req.body.number
    })
    const detail=new Detail({
taskType:req.body.Task,
taskTitle:req.body.taskTitle,
taskDescri:req.body.taskDescri,
taskDate:req.body.taskDate,
 masterRequire:req.body.require,
reward:req.body.reward,
 number:req.body.number,
 //open:'false'
//detail:req.body

    })
    work.save()
    .catch((err)=>console.log(err))
    res.json(('saved to db:'+work))
    console.log(req.body)

    detail.save()
    .catch((err)=>console.log(err))
    res.json(('saved to db:'+detail))
    console.log(req.body)
    })




app.use(fileUpload());
    

//Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})