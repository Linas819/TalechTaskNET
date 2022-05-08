using System;
using System.Collections.Generic;

#nullable disable

namespace TalechTaskNET.WareHouseData
{
    public partial class Inventory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Ean { get; set; }
        public sbyte Type { get; set; }
        public float Weight { get; set; }
        public string Color { get; set; }
        public float Price { get; set; }
        public int Quantity { get; set; }
    }
}
