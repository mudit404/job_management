CREATE TABLE "jobs" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"company" varchar(255),
	"location" varchar(255),
	"type" varchar(50),
	"salary" varchar(50),
	"deadline" date,
	"description" text
);
