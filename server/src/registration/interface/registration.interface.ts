import { Document } from 'mongoose';

export interface Registration extends Document {
    readonly TeamName : string ;
    readonly SelectWorkshop : string; 
    readonly Email: string;
    readonly plan : String;
    readonly teamArray : [{
        readonly Name: string;
        readonly PhoneNumber: string;
        readonly StudentNumber: string;
        readonly Branch: string;
        readonly CollegeName : string;
        readonly created_at: Date;
    }]
    
}