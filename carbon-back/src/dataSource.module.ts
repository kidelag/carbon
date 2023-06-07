import { DataSource } from "typeorm";

const connectDB = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "carbon",
  password: "password",
  database: "carbon",
  entities: ["./**/entities/*.js"],
  migrations: ["./**/migrations/**.js"],
  synchronize: true,
  logging: false,
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

export default connectDB;
