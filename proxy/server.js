
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
  },
};

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const apiProxy = proxy(options);

app.use('/api', apiProxy);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
