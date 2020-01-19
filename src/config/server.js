const app = require('express')();

require('consign')()
  .include('routes')
  .then('config/db_connection.js')
  .into(app);

app.set('view engine', 'ejs');
module.exports = app;
