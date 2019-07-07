import Template from "./book-list.tpl.html";

class BookListComponent {
  constructor(BookService) {
    this.BookService = BookService;
    BookService.getAll().then(response =>
      this.books = response.data);
    this.orderProp = 'CreatedAt';
    this.reverse = true;
  }
  sortBy(orderProp) {
    this.reverse = orderProp === this.orderProp ? !this.reverse : false;
    this.orderProp = orderProp;
  }
  delete(book) {
    if (confirm(book.Name + " isimli kitabı silmek istediğinize emin misiniz?")) {
      this.BookService.delete(book.Id);
      this.books = this.books.filter(x => x != book);
    }
  }
}
export default {
  controller: ['BookService', BookListComponent],
  template: Template
};
