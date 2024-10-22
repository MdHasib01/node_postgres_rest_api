const { Pool } = require("pg");

const pool = new Pool({
  host: "dpg-csbkritds78s73b9hhm0-a.oregon-postgres.render.com",
  user: "ecommercedb_ugp7_user",
  password: "STfsNXFOMJqt1KbY6zYkwLJclz98vN3A",
  database: "ecommercedb_ugp7",
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // This allows self-signed certificates, can be true if using a verified certificate
  },
});

module.exports = {
  pool,
};
