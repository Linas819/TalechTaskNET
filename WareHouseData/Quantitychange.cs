using System;
using System.Collections.Generic;

#nullable disable

namespace TalechTaskNET.WareHouseData
{
    public partial class Quantitychange
    {
        public int Id { get; set; }
        public int ItemId { get; set; }
        public float Quantity { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
