import Template from "./book-edit.tpl.html";

class BookEditComponent {
  constructor($routeParams, BookService) {
    this.BookService = BookService;
    this.bookId = $routeParams.bookId;
    this.isNew = this.bookId === "yeni";
    this.title = this.isNew ? "Ekle" : "Düzenle";
    this.book = {
      Id: "",
      Isbn: "",
      Name: "",
      Writer: "",
      Publisher: "",
      CreatedAt: ""
    };
    if (this.isNew) {
      return;
    }
    BookService.get(this.bookId).then(response => {
      this.book = response.data;
    });
  }
  save(formValid) {
    if (!formValid) return;
    if (this.isNew) {
      this.add();
    } else {
      this.update();
    }
  }
  add() {
    this.BookService.post(this.book).then(result => {
      alert("Kitap başarı ile eklendi!");
      this.goBack();
    });
  }
  update() {
    this.BookService.put(this.book).then(result => {
      alert("Kitap başarı ile güncellendi!");
      this.goBack();
    });
  }
  goBack() {
    window.location.href = "#!/kitaplar";
  }
}
export default {
  controller: ["$routeParams", "BookService", BookEditComponent],
  template: Template
};
