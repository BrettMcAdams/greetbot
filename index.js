const server = require('./api/server');


// 1 make the port dynamic

const port = process.env.PORT || 5000;

server.listen(port, () => console.log('server running on port 5000'));