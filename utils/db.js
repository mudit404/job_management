import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:npg_1WbqzTBKAUY9@ep-weathered-mode-a8e0209d-pooler.eastus2.azure.neon.tech/neondb?sslmode=require');
export const db = drizzle(sql,{schema});
