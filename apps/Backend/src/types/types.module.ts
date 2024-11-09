import { Global, Module } from '@nestjs/common';
import * as FilmmmTypes from '@filmmm/types';

@Global()
@Module({
  providers: Object.values(FilmmmTypes),
  exports: Object.values(FilmmmTypes),
})
export class TypesModule {}