import { Document } from 'mongoose';
// import { PlansArray } from '../dto/workshops.dto';

export interface Workshops extends Document {
    readonly name : string;
    readonly plans : string;
    readonly planPrice : string
    readonly team_limit: string;
    readonly plan_title : string;
    
}