using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Telsoft.Core.Applications.Clientes.Models;

namespace Telsoft.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Clientes")]
  public class ClientesController : Controller
  {
    [HttpGet]
    public List<Cliente> GetClientes() => new List<Cliente> {
      new Cliente{
        Id = 1,
        Nombre = "Aldo Romo"
      }
    };

  }
}
