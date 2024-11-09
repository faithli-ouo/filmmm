import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { TrendingModule } from './trending/trending.module';
import { SearchModule } from './search/search.module';
import { DbModule } from './db/db.module';
import { TypesModule } from './types/types.module';

@Module({
  imports: [ConfigModule.forRoot(
    { 
      isGlobal: true,
      envFilePath: '.env',
    }
  ), MoviesModule, ActorsModule, TrendingModule, SearchModule, DbModule, TypesModule],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
