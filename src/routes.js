const {
  addBookHandler,
  getAllBookHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
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
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookByIdHandler,
  },
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: updateBookByIdHandler,
  },
];

module.exports = routes;
