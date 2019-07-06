import angular from "angular";
import ngRoute from 'angular-route';
import Components from "./components/components.module";

const booksApp = angular
  .module("booksApp", [ngRoute, Components])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<book-list></book-list>"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
  ]);

