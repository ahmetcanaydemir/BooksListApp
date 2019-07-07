using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccessLayer.DAL;
using DataAccessLayer.Models;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BooksController : ApiController
    {
        IRepository<Book> _bookService;
        public BooksController(IRepository<Book> bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _bookService.GetAll();
        }
        [HttpGet]
        public Book Get(int id)
        {
            Book book = _bookService.GetById(id);
            return book.Id>0 ? book : null;
        }

        [HttpPut]
        public bool Put([FromBody]Book book)
        {
            if (_bookService.GetById(book.Id).Id == 0)
                return false;
            _bookService.Update(book);
            return true;
        }
        [HttpPost]
        public bool Post([FromBody]Book book)
        {
            _bookService.Insert(book);
            return true;
        }
        [HttpDelete]
        public bool Delete(int id)
        {
            _bookService.Delete(id);
            return true;
        }
    }
}
