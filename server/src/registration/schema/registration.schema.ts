import * as mongoose from 'mongoose';
import { type } from 'os';
export const MemberRegistrationSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    StudentNumber : { type : String , required : true},
    Email: {type:String , required:true},
    Branch: { type: String, required: true },
    CollegeName : { type: String, required: true },
})
export const RegisterationSchema = new mongoose.Schema({    
    TeamName: {type: String , required: true,},
    SelectWorkshop: { type: String, required: true },
    plan: {type : String , required : true},
    Email: { type: String, required: true },
    teamArray:[MemberRegistrationSchema],
    created_at: { type: Date, default: Date.now } 
})

