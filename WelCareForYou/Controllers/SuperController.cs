using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


using WelCareForYou.Models;
using System.Data;
using System.Data.Entity;
using System.Net;
using System.Dynamic;

namespace WelCareForYou.Controllers
{
    public class SuperController : Controller
    {       

        private BusinessModelContainer db = new BusinessModelContainer();
        public ActionResult Index()
        {
            List<SelectListItem> ageGroupList = new List<SelectListItem>();
            ageGroupList.AddRange(new[]
            {
                new SelectListItem() {Text = "50-55", Value = "50-55", Selected = false},
                new SelectListItem() {Text = "56-60", Value = "56-60", Selected = false},
                new SelectListItem() {Text = "61-65", Value = "61-65", Selected = false},
                new SelectListItem() {Text = "66-70", Value = "66-70", Selected = false},
                new SelectListItem() {Text = "71-75", Value = "71-75", Selected = false},
                new SelectListItem() {Text = "75 +", Value = "75 +", Selected = false}
            });
            ViewData["AgeGroup"] = ageGroupList;

            List<SelectListItem> genderList = new List<SelectListItem>();
            genderList.AddRange(new[]
            {
                new SelectListItem() {Text = "Male", Value = "Male", Selected = false},
                new SelectListItem() {Text = "Female", Value = "Female", Selected = false},
                new SelectListItem() {Text = "Others", Value = "Others", Selected = false}
            });
            ViewData["Gender"] = genderList;

            List<SelectListItem> numOfRoomList = new List<SelectListItem>();
            numOfRoomList.AddRange(new[]
            {
                new SelectListItem() {Text = "1", Value = "1", Selected = false},
                new SelectListItem() {Text = "2", Value = "2", Selected = false},
                new SelectListItem() {Text = "3", Value = "3", Selected = false},
                new SelectListItem() {Text = "4", Value = "4", Selected = false}
            });
            ViewData["NumOfRoom"] = numOfRoomList;

            ViewData["SuburbName"] = new SelectList(db.Suburbs, "SuburbName", "SuburbName");

            return View();
        }

        protected override void HandleUnknownAction(string actionName)
        {
            Response.Redirect("~/Home/PageNotFound");
            base.HandleUnknownAction(actionName);
        }
    }
}