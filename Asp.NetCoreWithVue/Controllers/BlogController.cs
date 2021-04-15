using Asp.NetCoreWithVue.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCoreWithVue.Controllers
{

    public class Blog
    {
        public int Id { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
    }
    public class BlogController : Controller
    {
        private readonly ILogger<BlogController> _logger;

        public BlogController(ILogger<BlogController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public IActionResult Get()
        {
            var blog = new List<Blog>(){
                new Blog(){Id=1,Adi="Cahit",Soyadi="Kafadar"},
                new Blog(){Id=2,Adi="Yusuf",Soyadi="Kafadar"}
            };

            return Ok(blog);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var blog = new List<Blog>(){
                new Blog(){Id=1,Adi="Cahit",Soyadi="Kafadar"},
                new Blog(){Id=2,Adi="Yusuf",Soyadi="Kafadar"}
            };

            return Ok(blog.Find(u=>u.Id==id));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
