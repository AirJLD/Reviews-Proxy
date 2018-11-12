
const express = require('express');

const morgan = require('morgan');

const path = require('path');

const app = express();

const port = process.env.PORT || 8081;

const proxy = require('http-proxy-middleware');

const options = {
  target: 'http://localhost:8081',
  changeOrigin: true,
  router: {
    '/api': 'http://airjld-reivews.us-east-2.elasticbeanstalk.com',
    '/rooms': 'http://airjldbooking.us-west-2.elasticbeanstalk.com',
    '/listings': 'http://airjld2-env.nhf7jyknam.us-east-2.elasticbeanstalk.com',
    '/description': 'http://jackscrap.us-west-1.elasticbeanstalk.com',
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
