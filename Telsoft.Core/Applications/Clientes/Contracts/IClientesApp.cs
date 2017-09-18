using Telsoft.Core.Applications.Clientes.Models;
using Telsoft.Core.Applications.Common;
using Telsoft.Core.Applications.Common.Dtos;

namespace Telsoft.Core.Applications.Clientes.Contracts
{
    public interface IClientesApp : ICrudRepository<Cliente>
    {
        SearchResult<Cliente> Search(ClientSeachDto searchParams);
    }
}