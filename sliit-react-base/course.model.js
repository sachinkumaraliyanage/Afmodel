

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Course=new Schema({

    name:{
        type:String
    },

    code:{
        type:String
    },

    passMark:{
        type:Number
    },
    lectureinCharge:{
        type:String
    },
    subjects:{
        type:Array
    },


});


module.exports=mongoose.model('Course',Course);