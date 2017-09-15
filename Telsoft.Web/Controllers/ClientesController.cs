using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Telsoft.Core.Applications.Clientes.Models;
using Telsoft.Core.Applications.Clientes.Contracts;
using Telsoft.Core.Applications.Clientes;
using Nest;
using System;

namespace Telsoft.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/clientes")]
  public class ClientesController : Controller
  {
    IClientesApp _app;

    public ClientesController()
    {
      _app = new ClientesApp();
    }


    [HttpPost]
    [Route("create")]
    public IIndexResponse Create([FromBody]Cliente dto)
    {
      return _app.Create(dto);
    }

    [HttpPost]
    [Route("delete")]
    public IDeleteResponse Delate(Guid id)
    {
      return _app.Delate(id);
    }

    [HttpPost]
    [Route("get")]
    public Cliente Get(Guid id)
    {
      return _app.Get(id);
    }

    [HttpPost]
    [Route("search")]
    public IReadOnlyCollection<Cliente> Search([FromBody]ClientSeachDto searchParams)
    {

      ISearchResponse<Cliente> result = _app.Search(searchParams);
      return result.Documents;
    }

    [HttpPost]
    [Route("update")]
    public IUpdateResponse<Cliente> Update([FromBody]Cliente dto)
    {
      return _app.Update(dto.Id, dto);
    }
  }
}
