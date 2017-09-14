namespace Telsoft.Core.Applications.Clientes.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public string Celular { get; set; }
        public string Email { get; set; }

        public Domicilio Domicilio { get; set; }
        public DatosFiscales DatosFiscales { get; set; }
    }
}