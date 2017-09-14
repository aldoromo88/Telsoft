using Microsoft.AspNetCore.Mvc;

namespace Telsoft.Web.Controllers
{
  [Route("api")]
  public class DataController : Controller
  {
    [Route("hello")]
    [HttpGet]
    public IActionResult Hello()
    {
      var msg = new { Message = "Hello World" };
      return this.Ok(msg);
    }

    [Route("error")]
    [HttpGet]
    public IActionResult ErrorTest()
    {
      return this.Unauthorized();
    }
  }
}
