const express = require('express');
const app = express();

app.get('/', (request, response) => {
  return response.send('Hello world from docker');
})

app.listen(process.env.PORT || 8080);