module.exports = app => {
  app.get('/noticias', async (req, res) => {
    const connection = app.config.db_connection();

    connection.query('select * from noticias', (error, result) => {
      res.render('noticias/noticias', { noticias: result });
    });
  });
};
