using Microsoft.AspNetCore.Mvc;
using Telsoft.Core.Applications.Clientes.Models;
using Telsoft.Core.Applications.Clientes.Contracts;
using Telsoft.Core.Applications.Clientes;
using Nest;
using System;
using System.Collections.Generic;
using Telsoft.Core.Applications.Common.Dtos;

namespace Telsoft.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/clients")]
  public class ClientsController : Controller
  {
    IClientesApp _app;

    public ClientsController()
    {
      _app = new ClientesApp();
    }


    [HttpPost]
    [Route("create")]
    public IIndexResponse Create([FromBody]Cliente dto)
    {
      var result = _app.Create(dto);
      return result;
    }

    [HttpPost]
    [Route("delete")]
    public IDeleteResponse Delate([FromBody]Guid id)
    {
      var result = _app.Delate(id);
      return result;
    }

    [HttpPost]
    [Route("get")]
    public Cliente Get([FromBody]Guid id)
    {
      var result = _app.Get(id);
      return result;
    }

    [HttpPost]
    [Route("search")]
    public SearchResult<Cliente> Search([FromBody]ClientSeachDto searchParams)
    {
      var result = _app.Search(searchParams);
      return result;
    }

    [HttpPost]
    [Route("update")]
    public IUpdateResponse<Cliente> Update([FromBody]Cliente dto)
    {
      var result = _app.Update(dto.Id, dto);
      return result;
    }
  }
}
