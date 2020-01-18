const app = require('express')();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('<html><body>Portal de noticias</body></html>');
});

app.get('/tecnologia', (req, res) =>
  res.render('tecnologias')
);

app.listen(3000, () =>
  // eslint-disable-next-line no-console
  console.log('Servidor EXPRESS rodando em porta => 3000')
);
