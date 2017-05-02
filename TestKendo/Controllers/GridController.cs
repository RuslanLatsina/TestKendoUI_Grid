using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TestKendo.Models;
using System.Net;

namespace TestKendo.Controllers
{
    public class GridController : ApiController
    {

        public IHttpActionResult GetUsers()
        {
            var data = JsonConvert.DeserializeObject<IEnumerable<UserModel>>(System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath(@"~/Data/users.json")));

            return Ok(data);
        }
    }
}