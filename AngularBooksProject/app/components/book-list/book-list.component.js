import Template from "./book-list.tpl.html";

class BookListComponent {
  constructor(BookService) {
    BookService.getAll().then(response => {
      this.books = response.data;
      this.books.map(book => {
        const date = new Date(book.CreatedAt);
        book.CreatedAt = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
        return ({ ...book, CreatedAt: book.CreatedAt });
      });
    });
    this.orderProp = 'CreatedAt';
    this.reverse = true;
  }
  sortBy(orderProp) {
    this.reverse = orderProp === this.orderProp ? !this.reverse : false;
    this.orderProp = orderProp;
  }
}
export default {
  controller: ['BookService', BookListComponent],
  template: Template
};
