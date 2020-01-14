import { Controller, Post, Body, NotAcceptableException } from '@nestjs/common';

import { RegisterService } from './register.service';

@Controller('register')
export class teamController {
    constructor(private readonly registerService: RegisterService) { }

    @Post()
    async addTeam(
        @Body('teamName') teamName: string,
        @Body('memberNumber') memberNumber: number,
        @Body('name') name: string[],
        @Body('phoneNumber') phoneNumber: string[],
        @Body('year') year: string[],
        @Body('branch') branch: string[],
        @Body('studentNumber') studentNumber: string[],
        @Body('email') email: string[],
    ) {
        let studentId: string[];
        await this.registerService.validateInput(teamName, memberNumber, studentNumber);
        studentId = await this.registerService.addStudent(name, studentNumber, year, branch, phoneNumber, email, memberNumber);
        await this.registerService.addTeam(teamName, memberNumber, studentId);
    }
}