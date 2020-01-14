import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TeamSchema } from './team.model';
import { RegisterService } from './register.service';
import { teamController } from './register.controller';
import { StudentSchema } from './student.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Teams', schema: TeamSchema }]),
        MongooseModule.forFeature([{ name: 'Students', schema: StudentSchema }])
    ],
    controllers: [teamController],
    providers: [RegisterService],
})

export class registerModule { }