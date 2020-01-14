import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    memberNumber: { type: Number, required: true },
    member1: { type: Object },
    member2: { type: Object },
    member3: { type: Object },
    member4: { type: Object },
    member5: { type: Object }
})

export interface Team extends mongoose.Document {
    id: string,
    teamName: string,
    memberNumber: number,
    member1: object,
    member2: object,
    member3: object,
    member4: object,
    member5: object
}