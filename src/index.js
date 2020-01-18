const http = require('http');

const server = http.createServer((req, res) => {
  const { url: categoria } = req;

  if (categoria === '/tecnologia') {
    res.end(
      '<html><body>Noticias de tecnologia</body></html>'
    );
  } else if (categoria === '/moda') {
    res.end('<html><body>Noticias de moda</body></html>');
  } else if (categoria === '/beleza') {
    res.end('<html><body>Noticias de beleza</body></html>');
  } else {
    res.end('<html><body>Portal de notícias</body></html>');
  }
});

server.listen(3000);
