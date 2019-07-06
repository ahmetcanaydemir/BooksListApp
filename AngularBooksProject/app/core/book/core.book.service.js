import angular from 'angular';
class BookService {
  constructor($http) {
    this.$http = $http;
    this.API_URL = "http://localhost:52611/api/books/";
  }
  getAll() { // select *
    return this.$http.get(this.API_URL);
  }
  get(id) { // select
    return this.$http.get(this.API_URL + id);
  }
  post(book) { // insert
    return this.$http.post(this.API_URL + id);
  }
  put(book) { // update
    return this.$http.delete(this.API_URL + id);
  }
  delete(id) { // delete
    return this.$http.delete(this.API_URL + id);
  }

}
export default BookService;
