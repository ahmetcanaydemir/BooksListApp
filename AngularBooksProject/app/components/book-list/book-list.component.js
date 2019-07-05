import angular from "angular";
export class BookListComponent {
  constructor($http) {
    var self = this;
    console.log("test");
    $http.get("http://localhost:52611/api/books").then(function(response) {
      self.books = response.data;
    });
  }

  static create() {
    return {
      controller: [BookListComponent],
      template: require("./book-list.tpl.html")
    };
  }
}
