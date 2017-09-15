using Nest;
using System;

namespace Telsoft.Core.Applications.Common
{
    public interface ICrudRepository<T> where T : class
    {
        IIndexResponse Create(T dto);
        IUpdateResponse<T> Update<TUpdate>(Guid id, TUpdate dto) where TUpdate : class;
        IDeleteResponse Delate(Guid id);
        T Get(Guid id);
    }
}