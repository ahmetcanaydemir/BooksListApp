import angular from "angular";

booksApp.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: "/phones"
    });
  }
]);
