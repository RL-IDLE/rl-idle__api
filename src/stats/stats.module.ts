import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsGateway } from './stats.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatEntity } from './entities/stat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StatEntity]),
  ],
  providers: [StatsGateway, StatsService],
})
export class StatsModule {}
