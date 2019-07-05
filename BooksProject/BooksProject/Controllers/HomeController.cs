using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataAccessLayer.DAL;
using DataAccessLayer.Models;

namespace BooksProject.Controllers
{
    public class HomeController : Controller
    {
        IRepository<Book> _bookService;
        // GET: Home
        public HomeController(IRepository<Book> bookService)
        {
            _bookService = bookService;
        }
        public ActionResult Index()
        {
            return View(_bookService.GetAll());
        }
        public ActionResult Yeni()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Yeni(Book book)
        {
            if (ModelState.IsValid)
            {
                _bookService.Insert(book);
                return RedirectToAction("Index");
            }
            return View(book);
        }

        public ActionResult Duzenle(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(System.Net.HttpStatusCode.BadRequest);
            }

            var book = _bookService.GetById(id);
            if (book == null)
            {
                return HttpNotFound();
            }
            return View(book);
        }
        [HttpPost]
        public ActionResult Duzenle(Book book)
        {
            if (ModelState.IsValid)
            {
                _bookService.Update(book);
                return RedirectToAction("Index");
            }

            return View(book);
        }
        public ActionResult Sil(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(System.Net.HttpStatusCode.BadRequest);
            }

            var book = _bookService.GetById(id);
            if (book == null)
            {
                return HttpNotFound();
            }
            return View(book);
        }
        [HttpPost]
        public ActionResult Sil(int id)
        {
            var book = _bookService.GetById(id);
            if(book !=null)
            {
                _bookService.Delete(id);
            }
            return RedirectToAction("Index");
        }
    }
}