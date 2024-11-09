import 'dotenv/config';
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './packages/drizzle',
  schema: './packages/drizzle/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:q0WDygS4xPGa@ep-sweet-bonus-a16eagoc.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
});
