import angular from 'angular';
import BookListComponent from './book-list.component';

let bookListModule =
  angular.module('bookList', [])
    .component('bookList', BookListComponent);

export default bookListModule.name;
