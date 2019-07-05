
using System.Collections.Generic;
using DataAccessLayer.Models;

namespace DataAccessLayer.DAL
{
    public interface IRepository<T> where T : Entity
    {
        IEnumerable<T> GetAll();
        T GetById(object id);
        void Insert(T obj);
        void Update(T obj);
        void Delete(object id);
    }
}
