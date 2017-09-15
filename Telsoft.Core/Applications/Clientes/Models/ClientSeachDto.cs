namespace Telsoft.Core.Applications.Clientes.Models
{
    public class ClientSeachDto : IPagedSearch<string>
    {
        public int Page { get; set; }
        public int Size { get; set; }
        public string Filter { get; set; }
    }
}
