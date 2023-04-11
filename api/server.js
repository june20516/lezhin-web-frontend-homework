const express = require('express');
const server = express();
const port = 3333;

const fs = require('fs');

const cors = require('cors');
server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

server.get('/api/comics/:genre', (req, res) => {
  const genre = req.params.genre;
  const page = req.query.page || 1;

  const jsonFilePath = `api/${genre}/page_${page}.json`;
  fs.readFile(jsonFilePath, 'utf-8', (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
