const app = require('express')();

require('consign')()
  .include('routes')
  .into(app);

app.set('view engine', 'ejs');
module.exports = app;
