import Template from "./book-list.tpl.html";

class BookListComponent {
  constructor() {
    this.books = [
      { Id: 1, Name: "Test", Writer: "Test", Publisher: "Test", CreatedAt: "Test" },
      { Id: 2, Name: "Test", Writer: "Test", Publisher: "Test", CreatedAt: "Test" },
      { Id: 2, Name: "Test", Writer: "Test", Publisher: "Test", CreatedAt: "Test" },
      { Id: 2, Name: "Test", Writer: "Test", Publisher: "Test", CreatedAt: "Test" }
    ];
  }
}

export default {
  controller: [BookListComponent],
  template: Template
};
