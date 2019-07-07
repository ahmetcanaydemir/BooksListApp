import Template from "./book-edit.tpl.html";

class BookEditComponent {
  constructor($routeParams, BookService) {
    this.BookService = BookService;
    this.bookId = $routeParams.bookId;
    this.isNew = this.bookId === "yeni";
    this.title = this.isNew ? "Ekle" : "Düzenle";
    this.book = { Id: "", Name: "", Writer: "", Publisher: "" };
    if (this.isNew) {
      return;
    }
    BookService.get(this.bookId).then(response => {
      this.book = response.data;
    });
  }
  save() {
    if (this.isNew) {
      this.add();
    }
    else {
      this.update();
    }
  }
  add() {
    this.BookService.post(this.book);
    alert("Kitap başarı ile eklendi!");
    this.goBack();
  }
  update() {
    this.BookService.put(this.book);
    alert("Kitap başarı ile güncellendi!");
    this.goBack();
  }
  goBack() {
    setTimeout(() => {
      window.location.href = '#!/kitaplar';
    }, 200);
  }
}
export default {
  controller: ["$routeParams", 'BookService', BookEditComponent],
  template: Template
};
