import * as http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});