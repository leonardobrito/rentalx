import { DataSource } from "typeorm";

const dataSource = new DataSource({
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "docker",
  "password": "secret-password",
  "database": "rentx"
})

dataSource.initialize()
