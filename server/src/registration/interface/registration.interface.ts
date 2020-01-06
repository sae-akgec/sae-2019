import { Document } from 'mongoose';

export interface Registration extends Document {
    readonlyTeamName : string;
    readonly members : string;
    readonly Name: string;
    readonly Email: string;
    readonly PhoneNumber: string;
    readonly StudentNumber: string;
    readonly Branch: string;
    readonly SelectWorkshop : string; 
    readonly CollegeName : string;
    readonly created_at: Date;
}