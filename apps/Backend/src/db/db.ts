import { drizzle } from 'drizzle-orm/node-postgres';
import { DrizzleDB } from '@filmmm/types';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
    {
        provide: DrizzleAsyncProvider,
        useFactory: async () => {
            const connectionURL = process.env.DATABASE_URL!;    
    
            const db = drizzle(connectionURL) as DrizzleDB
            return db;
        },
    },
];