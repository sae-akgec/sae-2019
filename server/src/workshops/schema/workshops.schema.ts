import * as mongoose from 'mongoose';
import { type } from 'os';

export const WorkshopSchema = new mongoose.Schema([ {
    name: {type: String , required: true},
    plans : [new mongoose.Schema({planPrice:{type:String , required: true} ,team_limit :{type:String ,required: true},plan_title :{ type:String,required:true}})],
    planPrice:{type:String , required: true} ,
    team_limit :{type:String ,required: true},
    plan_title :{ type:String,required:true}
    }]);