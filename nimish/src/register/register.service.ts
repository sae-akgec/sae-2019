import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { Team } from './team.model'
import { Student } from './student.model'

@Injectable()
export class RegisterService {
    constructor(
        @InjectModel('Teams') private readonly teamModel: Model<Team>,
        @InjectModel('Students') private readonly studentModel: Model<Student>
    ) { }

    async validateInput(teamName: string, memberNumber: number, studentNumber: string[]) {
        if (memberNumber != 1 && memberNumber != 3 && memberNumber != 5) {
            throw new NotAcceptableException('Team size unacceptable');
        }
        const query1 = { "teamName": teamName };
        const team = await this.teamModel.findOne(query1).exec();
        if (team) {
            throw new NotAcceptableException('Team name already used');
        }
        for (let i = 0; i < memberNumber; i++) {
            let x = studentNumber[i];
            const query2 = { "studentNumber": x };
            const student = await this.studentModel.findOne(query2).exec();
            if (student) {
                throw new NotAcceptableException(`${student.name} is already registered with another team`);
            }
        }
    }

    async addTeam(teamName: string, memberNumber: number, studentId: string[]) {
        const newTeam = new this.teamModel({
            teamName,
            memberNumber
        });
        const student1 = await this.studentModel.findById(studentId[0]).exec();
        const student2 = await this.studentModel.findById(studentId[1]).exec();
        const student3 = await this.studentModel.findById(studentId[2]).exec();
        const student4 = await this.studentModel.findById(studentId[3]).exec();
        const student5 = await this.studentModel.findById(studentId[4]).exec();
        newTeam.member1 = student1;
        if(memberNumber >= 3){
            newTeam.member2 = student2;
            newTeam.member3 = student3;
            if(memberNumber == 5){
                newTeam.member4 = student4;
                newTeam.member5 = student5;
            }
        }
        const result = await newTeam.save();
        return result.id;
    }

    async addStudent(name: string[], studentNumber: string[], year: string[], branch: string[], phoneNumber: string[], email: string[], memberNumber: number) {
        const studentId: string[] = [];
        for (let i = 0; i < memberNumber; i++) {
            let _name = name[i];
            let _studentNumber = studentNumber[i];
            let _year = year[i];
            let _branch = branch[i];
            let _phoneNumber = phoneNumber[i];
            let _email = email[i];
            const newStudent = new this.studentModel({
                name: _name,
                studentNumber: _studentNumber,
                year: _year,
                branch: _branch,
                phoneNumber: _phoneNumber,
                email: _email
            });
            const result = await newStudent.save();
            studentId.push(result.id);
        }
        return studentId;
    }
}