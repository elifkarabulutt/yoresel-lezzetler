// app.js dosyasında düzenleme yaptıkttan ve tüm kodları yazdıktan sonra index.js dosyasının yeni hali:

const app = require('./app'); // app.js dosyanıza göre path'i güncelledik
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});










/*
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// controllers kısmındaki kodlar yazıldıktan sonra
const citiesController = require('./controllers/citiesController');
const recipesController = require('./controllers/recipesController');

// routes klasöründeki kodları yazdıktan sonra
const citiesRoutes = require('./routes/citiesRoutes');
const recipesRoutes = require('./routes/recipesRoutes');

const app = express();
const port = 3001; // 3000 de olabilir

app.use(bodyParser.json());

const pool = new Pool({
  user: 'kullanici_adi',
  host: 'localhost',
  database: 'veritabani_adi',
  password: 'sifre',
  port: 5432,
});

// Şehirleri getiren endpoint
app.get('/cities', citiesController.getCities);
// Şehir endpoint'lerini yönlendir
app.use('/cities', citiesRoutes);

// Tarifleri getiren endpoint
app.get('/recipes', recipesController.getRecipes);
// Tarif endpoint'lerini yönlendir
app.use('/recipes', recipesRoutes);

// Bir tarifin detaylarını getiren endpoint
app.get('/recipes/:id', recipesController.getRecipeDetails);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/



