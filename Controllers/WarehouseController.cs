using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TalechTaskNET.WareHouseData;

namespace TalechTaskNET.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WarehouseController : ControllerBase
    {
        private warehouseContext wh;
        public WarehouseController(warehouseContext wh)
        {
            this.wh = wh;
        }
        [HttpGet]
        public IActionResult Get()
        {
            List<Inventory> data = wh.Inventories.ToList();
            return(Ok(new{
                Data = data
            }));
        }
        [HttpGet]
        [Route("pricehistory")]
        public IActionResult GetPriceHistory(int id)
        {
            List<Pricechange> data = wh.Pricechanges.Where(x => x.ItemId == id).OrderByDescending(x => x.ModifiedDate).ToList();
            data = data.Take(5).ToList();
            return(Ok(new{
                Data = data
            }));
        }
        [HttpGet]
        [Route("quantityhistory")]
        public IActionResult GetQuantityHistory(int id)
        {
            List<Quantitychange> data = wh.Quantitychanges.Where(x => x.ItemId == id).OrderByDescending(x => x.ModifiedDate).ToList();
            data = data.Take(5).ToList();
            return(Ok(new{
                Data = data
            }));
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            bool success = true;
            string msg = "";
            Inventory data = wh.Inventories.Where(x => x.Id == id).FirstOrDefault();
            wh.Inventories.Remove(data);
            try
            {
                wh.SaveChanges();
            }
            catch (Exception ex)
            {
                success = false;
                msg = ex.Message;
            }
            return Ok(new{
                Success = success,
                Msg = msg
            });
        }
        [HttpPut]
        public IActionResult Update(Inventory data)
        {
            bool success = true;
            string msg = "";
            Inventory oldData = wh.Inventories.Where(x => x.Id == data.Id).First();
            oldData.Name = data.Name;
            oldData.Ean = data.Ean;
            oldData.Type = data.Type;
            oldData.Weight = data.Weight;
            oldData.Color = data.Color;
            try
            {
                wh.SaveChanges();
            }
            catch(Exception ex)
            {
                success = false;
                msg = ex.Message;
            }
            return Ok(new{
                Success = success,
                Msg = msg
            });
        }
        [HttpPut]
        [Route("price")]
        public IActionResult UpdatePrice(Inventory data)
        {
            bool success = true;
            string msg = "";
            Inventory oldData = wh.Inventories.Where(x => x.Id == data.Id).First();
            if(oldData.Price != data.Price)
            {
                oldData.Price = data.Price;
                Pricechange change = new Pricechange();
                change.ItemId = data.Id;
                change.Price = data.Price;
                wh.Pricechanges.Add(change);
                try
                {
                    wh.SaveChanges();
                }
                catch(Exception ex)
                {
                    success = false;
                    msg = ex.Message;
                }
            }
            return Ok(new{
                Success = success,
                Msg = msg
            });
        }
        [HttpPut]
        [Route("quantity")]
        public IActionResult UpdateQuantity(Inventory data)
        {
            bool success = true;
            string msg = "";
            Inventory oldData = wh.Inventories.Where(x => x.Id == data.Id).First();
            if(oldData.Quantity != data.Quantity)
            {
                int difference = oldData.Quantity - data.Quantity;
                oldData.Quantity = data.Quantity;
                Quantitychange change = new Quantitychange();
                change.ItemId = data.Id;
                change.Quantity = difference*-1;
                wh.Quantitychanges.Add(change);
                try
                {
                    wh.SaveChanges();
                }
                catch(Exception ex)
                {
                    success = false;
                    msg = ex.Message;
                }
            }
            return Ok(new{
                Success = success,
                Msg = msg
            });
        }
        [HttpPost]
        public IActionResult Post([FromBody] Inventory data)
        {
            bool success = true;
            string msg = "";
            data.Name = data.Name != null ? data.Name : "";
            data.Color = data.Color != null ? data.Color : "";
            wh.Inventories.Add(data);
            try
            {
                wh.SaveChanges();
            }
            catch (Exception ex)
            {
                success = false;
                msg = ex.Message;
            }
            return Ok(new{
                Success = success,
                Msg = msg
            });
        }
    }
}