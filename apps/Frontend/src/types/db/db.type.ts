import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from '../../db/schema'

export type DrizzleDB = NodePgDatabase<typeof schema>;