import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema({
    universityNumber  : {type:String , required:true},
    studentNo: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    branch: { type: String, required: true },
    studies:{type:String, required:true},
    email: { type: String, required: true },
    proName1:{type:String,required:true},
    proNam2:{type:String,required:true},
    year1:{type:String,required:true},
    year2:{type:String,required:true},


    // fileSource:{type:String,required:true},
    // domain: { type: String, required: true },
    // skills: { type: String, required: true },
    // usp: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})