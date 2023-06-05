CREATE TABLE "users" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "username" varchar(255) UNIQUE NOT NULL,
  "email" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL,
  "role" varchar(50) NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp
);

CREATE TABLE "participations" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "userId" int,
  "eventId" int,
  "state" int NOT NULL
);

CREATE TABLE "events" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp
);

ALTER TABLE "participations" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "participations" ADD FOREIGN KEY ("eventId") REFERENCES "events" ("id");
