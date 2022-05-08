using System;
using System.Collections.Generic;

#nullable disable

namespace TalechTaskNET.WareHouseData
{
    public partial class Pricechange
    {
        public int Id { get; set; }
        public int ItemId { get; set; }
        public float Price { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
