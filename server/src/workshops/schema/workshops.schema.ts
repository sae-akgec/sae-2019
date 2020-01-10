import * as mongoose from 'mongoose';

export const WorkshopSchema = new mongoose.Schema({
    planId: {type: String , required: true},
    planMembers : {type:String , required : true},
    planPrice: {type: String , required: true},
   
})