import { Module } from '@nestjs/common';
import { ConsultantBadge } from './entities/consultant-badge.entity';
import { Consultant } from 'src/consultant/entities/consultant.entity';
import { Badge } from 'src/badge/entities/badge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultantBadgeService } from './consultant-badge.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
        ConsultantBadge, Consultant, Badge
      ]),
    ],
    providers: [ConsultantBadgeService],

})
export class ConsultantBadgeModule {}