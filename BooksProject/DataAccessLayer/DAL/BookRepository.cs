using System;
using System.Collections.Generic;
using System.Configuration;
using DataAccessLayer.Models;
using MySql.Data.MySqlClient;

namespace DataAccessLayer.DAL
{
    public class BookRepository : IRepository<Book>
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["MySqlConnectionString"].ConnectionString;
        public void Delete(object bookId)
        {
            using (var con = new MySqlConnection(connectionString))
            {
                con.Open();
                var command = new MySqlCommand("DELETE FROM books WHERE id=@ID", con);
                command.Parameters.AddWithValue("ID", bookId);
                command.ExecuteNonQuery();
                con.Close();
            }
        }
   
        public Book GetById(object bookId)
        {
            using (var con = new MySqlConnection(connectionString))
            {
                Book book = new Book();
                con.Open();
                var command = new MySqlCommand("SELECT * FROM books WHERE id=@ID", con);
                command.Parameters.AddWithValue("ID", bookId);
                var reader = command.ExecuteReader();
                while (reader.Read())
                {
                    book.Id = Convert.ToInt32(reader["id"]);
                    book.Isbn = reader["isbn"].ToString();
                    book.Name = reader["name"].ToString();
                    book.Writer = reader["writer"].ToString();
                    book.Publisher = reader["publisher"].ToString();
                    book.CreatedAt = Convert.ToDateTime(reader["createdat"]);
                    break;
                }
                con.Close();
                return book;
            }
        }

        public IEnumerable<Book> GetAll()
        {
            using (var con = new MySqlConnection(connectionString))
            {
                List<Book> books = new List<Book>();
                con.Open();
                var command = new MySqlCommand("SELECT * FROM books", con);
                var reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Book book = new Book()
                    {
                        Id = Convert.ToInt32(reader["id"]),
                        Isbn = reader["isbn"].ToString(),
                        Name = reader["name"].ToString(),
                        Writer = reader["writer"].ToString(),
                        Publisher = reader["publisher"].ToString(),
                        CreatedAt = Convert.ToDateTime(reader["createdat"])
                    };
                    books.Add(book);
                }
                con.Close();
                return books;
            }
        }

        public void Insert(Book book)
        {
            using (var con = new MySqlConnection(connectionString))
            {
                con.Open();
                var command = new MySqlCommand("INSERT INTO books (isbn,name,writer,publisher,createdat) VALUES (@isbn,@name,@writer,@publisher,@createdat)", con);
                command.Parameters.AddWithValue("isbn", book.Isbn);
                command.Parameters.AddWithValue("name", book.Name);
                command.Parameters.AddWithValue("writer", book.Writer);
                command.Parameters.AddWithValue("publisher", book.Publisher);
                command.Parameters.AddWithValue("createdat", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff"));
                command.ExecuteNonQuery();
                con.Close();
            }
        }

        public void Update(Book book)
        {
            using (var con = new MySqlConnection(connectionString))
            {
                con.Open();
                var command = new MySqlCommand("UPDATE books SET isbn=@isbn,name=@name,writer=@writer,publisher=@publisher,createdat=@createdat WHERE id=@id", con);
                command.Parameters.AddWithValue("id", book.Id);
                command.Parameters.AddWithValue("isbn", book.Isbn);
                command.Parameters.AddWithValue("name", book.Name);
                command.Parameters.AddWithValue("writer", book.Writer);
                command.Parameters.AddWithValue("publisher", book.Publisher);
                command.Parameters.AddWithValue("createdat", book.CreatedAt.ToString("yyyy-MM-dd HH:mm:ss.fff"));
                command.ExecuteNonQuery();
                con.Close();
            }
        }
    }
}