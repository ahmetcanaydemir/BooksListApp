import angular from "angular";
import { BookListComponent } from "./components/book-list/book-list.component";

const booksApp = angular
  .module("booksApp", ["ngRoute"])
  .component("booksApp", BookListComponent.create())
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/", {
          template: "{{4*3}}<book-list></book-list>"
        })
        .otherwise({
          redirectTo: "/"
        });
    }
  ]);
console.log(booksApp);

//https://github.com/emartech/angular-phonecat-components/blob/master/src/app/components/phone-list-app/phone-list-app.component.js
