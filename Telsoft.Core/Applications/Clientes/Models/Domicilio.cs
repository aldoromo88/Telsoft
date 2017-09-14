using System;
using System.Collections.Generic;
using System.Text;

namespace Telsoft.Core.Applications.Clientes.Models
{
    public class Domicilio
    {
        public string Calle { get; set; }
        public string NumeroInterior { get; set; }
        public string NumeroExterior { get; set; }
        public string Colonia { get; set; }
        public string CodigoPostal { get; set; }
        public string Ciudad { get; set; }
    }
}
