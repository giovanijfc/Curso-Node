const app = require('./config/server');

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Run in => localhost:3000'));

require('./routes/noticias')(app);
require('./routes/home')(app);
require('./routes/formulario_inclusao_noticias')(app);
