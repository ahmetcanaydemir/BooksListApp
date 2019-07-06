import angular from 'angular';
class BookService {
  constructor($http) {
    this.$http = $http;
    this.API_URL = "http://localhost:52611/api/books/";
  }
  getAll() {
    return this.$http.get(this.API_URL);
  }
  get(id) {
    return this.$http.get(this.API_URL + id);
  }
}
export default BookService;
