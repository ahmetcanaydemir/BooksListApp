import angular from 'angular';
import BookList from './book-list/book-list.module';
let componentModule = angular.module('app.components', [
  BookList
]);

export default componentModule.name;
