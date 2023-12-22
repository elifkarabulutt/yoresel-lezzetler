// PostgreSQL bağlantı nesnesini middleware olarak ekleyen dosya

const { Pool } = require('pg');

const pool = new Pool({
  user: 'kullanici_adi',
  host: 'localhost',
  database: 'veritabani_adi',
  password: 'sifre',
  port: 5432,
});

const dbMiddleware = (req, res, next) => {
  req.pool = pool;
  next();
};

module.exports = dbMiddleware;


