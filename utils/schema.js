import { pgTable, varchar, text, date, serial } from 'drizzle-orm/pg-core';

// Define the Job schema using drizzle-orm's pgTable and column types
export const Jobs = pgTable('jobs', {
  // id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  company: varchar('company', { length: 255 }),
  location: varchar('location', { length: 255 }),
  type: varchar('type', { length: 50 }),
  salary: varchar('salary', { length: 50 }),
  deadline: date('deadline'),
  description: text('description'),
});