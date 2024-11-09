import {
    pgTable,
    serial,
    timestamp,
    text,
  } from 'drizzle-orm/pg-core';

  export const posts = pgTable('postss', {
    id: serial('ids').primaryKey(),
    content: text('content'),
    mediaUrl: text('media_url'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  });