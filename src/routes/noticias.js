const connection = require('../config/db_connection')();

module.exports = app => {
  app.get('/noticias', async (req, res) => {
    connection.query('select * from noticias', (error, result) => {
      res.render('noticias/noticias', { noticias: result });
    });
  });
};
