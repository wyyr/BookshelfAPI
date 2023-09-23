const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  console.log(`Bookshelf Application Server is running on ${server.info.uri}`);
  await server.start();
};

init();
