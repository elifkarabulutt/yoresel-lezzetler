// PostgreSQL bağlantı nesnesini middleware olarak ekleyen dosya

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'yoresel_yemekler',
  password: '2323',
  port: 5432,
});

const dbMiddleware = (req, res, next) => {
  req.pool = pool;
  next();
};

module.exports = dbMiddleware;


