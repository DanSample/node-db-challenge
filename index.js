const server = require('./server');
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
