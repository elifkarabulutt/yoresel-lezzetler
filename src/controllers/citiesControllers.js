// citiesModel dosyasındaki koldarı yazdıktan sonra
//const citiesModel = require('../models/citiesModel');

const getCities = async (req, res) => {
  try {
    // PostgreSQL bağlantı nesnesini kullan
    const cities = await getCities(req.pool);
    res.json(cities);
  } catch (error) {
    console.error('Error in citiesController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getCities };








/*
const getCities = async (req, res) => {
    try {
      const cities = await citiesModel.getCities();
      res.json(cities);
    } catch (error) {
      console.error('Error in citiesController:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
*/

/*
// önce üsttekini yazdım. bu alttaki sql bağlantısından sonra
const getCities = async (req, res) => {
  try {
    // PostgreSQL bağlantı nesnesini kullan
    const result = await req.pool.query('SELECT * FROM cities');
    res.json(result.rows);
  } catch (error) {
    console.error('Error in citiesController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getCities };
*/

