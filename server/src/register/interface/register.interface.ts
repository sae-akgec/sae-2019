import { Document } from 'mongoose';

export interface Register extends Document {
    readonly universityNumber : string;
    readonly studentNo: string;
    readonly phone: string;
    readonly branch: string;
    readonly studies:string;
    readonly name: string;
    readonly email: string;
    readonly proName1: string;
    readonly proName2: string;
    readonly year1: string;
    readonly year2: string;

    // readonly fileSource:string;
    // readonly domain: string;
    // readonly gender: string;

    // readonly skills: string;
    // readonly usp: string;
    readonly created_at: Date;
}