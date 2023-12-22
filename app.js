const express = require('express');
const bodyParser = require('body-parser');
const dbMiddleware = require('./middlewares/dbMiddleware'); // veritabanı bağlantısı
const citiesRoutes = require('./routes/citiesRoutes');
const recipesRoutes = require('./routes/recipesRoutes');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// PostgreSQL bağlantı middleware'ını kullan
app.use(dbMiddleware);

// Şehir endpoint'lerini yönlendir
app.use('/cities', citiesRoutes);

// Tarif endpoint'lerini yönlendir
app.use('/recipes', recipesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

