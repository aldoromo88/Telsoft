using Telsoft.Core.Applications.Clientes.Contracts;
using Telsoft.Core.Applications.Clientes.Models;
using Telsoft.Core.Applications.Common;
using Telsoft.Core.Applications.Common.Dtos;
using Telsoft.Core.Configuration;

namespace Telsoft.Core.Applications.Clientes
{
    public class ClientesApp : BaseApp<Cliente>, IClientesApp
    {
        public ClientesApp() : base(Consts.DefaultIndex)
        {
        }

        public SearchResult<Cliente> Search(ClientSeachDto searchParams)
        {
            return new SearchResult<Cliente>(Storage.Search<Cliente>(c => c.From((searchParams.Page - 1) * searchParams.Size).Size(searchParams.Size).Query(q => q.Term(t => t.Nombre, searchParams.Filter))));
        }
    }
}
