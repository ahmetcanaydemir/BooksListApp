import angular from "angular";
import ngRoute from 'angular-route';
import Components from "./components/components.module";

const booksApp = angular
  .module("booksApp", [ngRoute, Components])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/kitaplar", {
        template: "<book-list></book-list>"
      })
      .when("/kitaplar/sil/:bookId", {
        template: "<book-edit></book-edit>"
      })
      .when("/kitaplar/:bookId", {
        template: "<book-edit></book-edit>"
      })
      .otherwise({
        redirectTo: "/kitaplar"
      });
  }
  ]);

