using Nest;
using Telsoft.Core.Applications.Clientes.Contracts;
using Telsoft.Core.Applications.Clientes.Models;
using Telsoft.Core.Applications.Common;
using Telsoft.Core.Configuration;

namespace Telsoft.Core.Applications.Clientes
{
    public class ClientesApp : BaseApp<Cliente>, IClientesApp
    {
        public ClientesApp() : base(Consts.DefaultIndex)
        {
        }

        public override ISearchResponse<Cliente> SearchCompanies(dynamic searchRequest)
        {
            return Storage.Search<Cliente>(c => c.From(0).Size(10).Query(q =>q.Term(t => t.Nombre, (string)searchRequest.Filtro)));
        }
    }
}
