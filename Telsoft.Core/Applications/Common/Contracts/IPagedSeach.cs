namespace Telsoft.Core.Applications.Common.Dtos
{
    public interface IPagedSeach<T>
    {
      int Page { get; set; }
      int Size { get; set; }
      T Filter { get; set; }
    }
}
