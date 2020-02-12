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
    public class RentController : Controller
    {
        private BusinessModelContainer db = new BusinessModelContainer();

        public ActionResult Index()
        {
            List<SelectListItem> ageGroupList = new List<SelectListItem>();
            ageGroupList.AddRange(new[]
            {
                new SelectListItem() {Text = "My age is below 50",Value="My age is below 50", Selected = false},
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

            ViewBag.Area = new SelectList(db.Suburbs.Select(c => c.AreaName), "AreaName", "SuburbName");
            ViewData["SuburbName"] = new SelectList(db.Suburbs.OrderBy(m => m.SuburbName), "SuburbName", "SuburbName");

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        //public ActionResult Result(String salary, String numOfPeople1, String currentRent1)
        public ActionResult Index([Bind(Include = "Id,AgeGroup,Gender,NumOfRoom,Salary,SuburbSuburbName")] Client client, String rent)
        {
            if (ModelState.IsValid)
            {
                TempData["_rent"] = rent;
                return RedirectToAction("Result", client);
            }

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

        public ActionResult Result(Client client)
        {
            String rent = (String)TempData["_rent"];
            if (rent == null)
            {
                return RedirectToAction("Index", "Home");
                //return HttpNotFound();
            }
            if (ModelState.IsValid)
            {
                db.Clients.Add(client);
                db.SaveChanges();
            }

            var numOfRoom = client.NumOfRoom;
            var currentRent = int.Parse(rent);
            var acceptableRent = client.Salary * 0.3;
            ViewBag.acceptableRent = acceptableRent;

            List<Suburb> selectedSuburb = db.Suburbs.Where(x => x.SuburbName == client.SuburbSuburbName).ToList();
            var areaName = selectedSuburb[0].AreaName;
            var availableSuburb = db.Suburbs.Where(x => x.AreaName == areaName).Select(x => x.SuburbName).ToList();

            if (currentRent > acceptableRent)
            {

                List<House> housingList = db.Houses.Where(x => availableSuburb.Contains(x.SuburbSuburbName)).Where(x => x.MediumPrice <= acceptableRent)
                                                .Where(x => x.NumOfRoom >= numOfRoom)
                                                .OrderByDescending(x => x.MediumPrice).Take(8).ToList();
                //Search other area (no result from the original area.)
                /*
                if (housingList.Count() == 0)
                {
                    housingList = db.Houses.Where(x => x.MediumPrice <= acceptableRent)
                                                .Where(x => x.NumOfRoom >= numOfRoom)
                                                .OrderByDescending(x => x.MediumPrice).Take(8).ToList();
                }
                */
                ViewBag.ResultTitle = "Your better options based on our analysis.";

                if (housingList.Count() == 0)
                {
                    ViewBag.ResultTitle = "Sorry! There is no option for you.";
                }
                
                if (housingList.Count > 0)
                {
                    for (int i = 0; i < housingList.Count; i++)
                    {
                        housingList[i].DiffPercent = housingList[i].MediumPrice * 100 / currentRent - 100;
                    }
                }

                return View(housingList);
            }
            else
            {
                List<House> housingList = db.Houses.Where(x => availableSuburb.Contains(x.SuburbSuburbName)).Where(x => x.MediumPrice <= acceptableRent)
                                                .Where(x => x.NumOfRoom >= numOfRoom)
                                                .OrderByDescending(x => x.MediumPrice).Take(0).ToList();

                ViewBag.ResultTitle = "Great! You are not at risk of homelessness.";

                return View(housingList);
            }
        }
        
        protected override void HandleUnknownAction(string actionName)
        {
            Response.Redirect("~/Home/PageNotFound");
            base.HandleUnknownAction(actionName);
        }
    }
}