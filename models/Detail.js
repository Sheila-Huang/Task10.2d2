const mongoose=require('mongoose')
const detailSchema=new mongoose.Schema({

taskTitle:String,
taskDescri:String,
taskDate:String,
taskType:String,
masterRequire:String,
reward:String,
number:String,
//open:String,
})

module.exports=mongoose.model("Detail",detailSchema)