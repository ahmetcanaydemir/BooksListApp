import angular from 'angular';
import ngResource from 'angular-resource';
//import BookService from './core.book.service';

let BookModule = angular
  .module('core.book', [ngResource])
  .factory('Book', ['$resource',
    function ($resource) {
      return $resource('http://localhost:52611/api/books/:bookId', {}, {
        query: {
          method: 'GET',
          params: { bookId: '' },
          isArray: true
        }
      });
    }
  ]);

export default BookModule.name;
