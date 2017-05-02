using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestKendo.Models;

namespace TestKendo.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetUsers()
        {
            var data = JsonConvert.DeserializeObject<IEnumerable<UserModel>>(System.IO.File.ReadAllText(Server.MapPath(@"~/Data/users.json")));

            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}