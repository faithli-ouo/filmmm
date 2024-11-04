import { Global, Module } from '@nestjs/common';
import { DrizzleAsyncProvider, drizzleProvider } from './db';

@Global()
@Module({
  providers: [...drizzleProvider],
  exports: [DrizzleAsyncProvider],
})
export class DbModule {}
