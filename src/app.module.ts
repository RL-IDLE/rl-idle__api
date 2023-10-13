import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { StatsModule } from './stats/stats.module';
import configurations from './config';

const isProduction = process.env.NODE_ENV === 'production';
console.log('isProductionDB', isProduction);

@Module({
  imports: [
    ...configurations,
    EventsModule,
    StatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}