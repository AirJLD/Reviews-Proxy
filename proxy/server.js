
const express = require('express');

const morgan = require('morgan');

const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const proxy = require('http-proxy-middleware');

const options = {
  target: 'http://localhost:3000',
  changeOrigin: true,
  router: {
    '/api': 'http://localhost:3001',
    '/rooms': 'http://localhost:3002',
    '/description': 'http://localhost:3003',
    '/listings': 'http://localhost:1128',
  },
};

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const apiProxy = proxy(options);

app.use('/api', apiProxy);
app.use('/rooms', apiProxy);
app.use('/listings', apiProxy);
app.use('/description', apiProxy);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
