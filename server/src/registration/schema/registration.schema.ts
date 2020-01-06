import * as mongoose from 'mongoose';

export const RegisterationSchema = new mongoose.Schema({
    teamName: {type: String , required: true},
    teamId : {type: String , required: true},
    teamMember : {type : String , required : true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    studentNo : { type : String , required : true},
    branch: { type: String, required: true },
    year: { type: String, required: true },
    collegeName : { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})