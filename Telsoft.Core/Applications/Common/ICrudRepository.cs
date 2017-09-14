using Nest;
using System;

namespace Telsoft.Core.Applications.Common
{
    public interface ICrudRepository<T> where T : class
    {
        IIndexResponse Create(T dto);
        IUpdateResponse<T> UpdateCompany<TUpdate>(Guid id, TUpdate dto) where TUpdate : class;
        ISearchResponse<T> SearchCompanies(dynamic searchRequest);
        IDeleteResponse DelateCompany(Guid id);
        T GetComnpany(Guid id);
    }
}