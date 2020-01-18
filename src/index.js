const restify = require('restify');

const PORT = 5000;
const app = restify.createServer();
app.get('/', (req, res) => res.send('localhost:5000'));
app.listen(PORT);
