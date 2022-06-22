import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "secret-password",
  database: "rentx",
  synchronize: false,
  logging: true,
  entities: [],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  subscribers: [],
})

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource
