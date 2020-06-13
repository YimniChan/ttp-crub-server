const pgtools = require("pgtools");

// An object with user, host, port, and password properties;
const config = {
  user: "postgres",
  host: "localhost",
  port: 5432,
  password: process.env.DATABASE_URL}