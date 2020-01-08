import * as mongoose from 'mongoose';

export const RegisterationSchema = new mongoose.Schema({
    TeamName: {type: String , required: true},
    leaderEmail:{type:String,required:true},
    members : {type : String , required : true},
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    StudentNumber : { type : String , required : true},
    Branch: { type: String, required: true },
    SelectWorkshop: { type: String, required: true },
    CollegeName : { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})