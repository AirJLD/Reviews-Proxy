const app = require('./api');

const port = 3002;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
