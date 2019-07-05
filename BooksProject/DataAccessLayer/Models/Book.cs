using System;
namespace DataAccessLayer.Models
{
    public class Book : Entity
    {
        public int Id { get; set; }
        public string Name{ get; set; }
        public string Writer { get; set; }
        public string Publisher { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}