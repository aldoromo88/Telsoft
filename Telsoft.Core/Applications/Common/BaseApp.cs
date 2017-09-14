using Nest;
using System;

namespace Telsoft.Core.Applications.Common
{

    public abstract class BaseApp
    {
        readonly IElasticClient _storage;

        public BaseApp(string index)
        {
            //TODO Get this path from configs
            var node = new Uri("http://localhost:9200");
            var settings = new ConnectionSettings(node);
            settings.DefaultIndex(index);
            settings.DisableDirectStreaming(true);

            _storage = new ElasticClient(settings);
        }

        public IElasticClient Storage => _storage;
    }

    public abstract class BaseApp<T> : BaseApp, ICrudRepository<T> where T : class
    {
        public BaseApp(string index) : base(index)
        {
        }

        public virtual IIndexResponse Create(T dto)
        {
            return Storage.Index(dto);
        }

        public virtual IDeleteResponse DelateCompany(Guid id)
        {
            return Storage.Delete(new DocumentPath<T>(id));
        }

        public virtual T GetComnpany(Guid id)
        {
            return Storage.Get(new DocumentPath<T>(id)).Source;
        }

        public abstract ISearchResponse<T> SearchCompanies(dynamic searchRequest);

        public virtual IUpdateResponse<T> UpdateCompany<TUpdate>(Guid id, TUpdate dto) where TUpdate : class
        {
            return Storage.Update<T, TUpdate>(
                new DocumentPath<T>(id),
                u => u.Doc(dto).RetryOnConflict(5)
                );
        }
    }
}
