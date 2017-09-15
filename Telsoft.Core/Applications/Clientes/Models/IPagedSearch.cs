namespace Telsoft.Core.Applications.Clientes.Models
{
    public interface IPagedSearch<T>
    {
        int Page { get; set; }
        int Size { get; set; }
        T Filter { get; set; }
    }
}