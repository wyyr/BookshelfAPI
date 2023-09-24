const {
  addBookHandler,
  getAllBookHandler,
} = require('./handler');

const routes = [
  {
    path: '/books',
    method: 'POST',
    handler: addBookHandler,
  },
  {
    path: '/books',
    method: 'GET',
    handler: getAllBookHandler,
  },
];

module.exports = routes;
