const mysql = require('mysql');

module.exports = app => {
  app.get('/noticias', async (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'portal_noticias'
    });

    connection.query('select * from noticias', (error, result) => {
      res.send(result);
    });

    connection.end();
  });
};
