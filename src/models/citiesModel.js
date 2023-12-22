// try catch olmadan

const getCities = async (pool) => {
  const result = await pool.query('SELECT * FROM cities');
  return result.rows;
};

module.exports = { getCities };











/*
const getCities = async () => {
  try {
    const result = await pool.query('SELECT * FROM cities');
    return result.rows;
  } catch (error) {
    console.error('Error fetching cities', error);
    throw error;
  }
};
module.exports = { getCities };
*/





