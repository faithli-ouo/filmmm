import { Module } from '@nestjs/common';
import { TrendingService } from './trending.service';
import { TrendingController } from './trending.controller';

@Module({
  controllers: [TrendingController],
  providers: [TrendingService],
})
export class TrendingModule {}
