using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestKendo.Models
{
    public class UserModel
    {
        [JsonProperty("index")]
        public int Index { get; set; }
        [JsonProperty("isActive")]
        public bool IsActive { get; set; }
        [JsonProperty("balance")]
        public string Balance { get; set; }
        [JsonProperty("age")]
        public int Age { get; set; }
        [JsonProperty("name")]
        public Name Name { get; set; }
        [JsonProperty("company")]
        public string Company { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("phone")]
        public string Phone { get; set; }
        [JsonProperty("address")]
        public string Address { get; set; }
        [JsonProperty("registered")]
        public DateTime Registered { get; set; }
    }

    public class Name
    {
        [JsonProperty("first")]
        public string First { get; set; }
        [JsonProperty("last")]
        public string Last { get; set; }
    }
}