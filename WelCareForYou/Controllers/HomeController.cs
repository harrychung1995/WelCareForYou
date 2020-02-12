using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WelCareForYou.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PageNotFound()
        {
            return View();
        }

        protected override void HandleUnknownAction(string actionName)
        {
            Response.Redirect("~/Home/PageNotFound");
            base.HandleUnknownAction(actionName);
        }
    }
}