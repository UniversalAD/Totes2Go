using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Totes2Go.Models
{
    public class EmailContact
    {
        public string Id { get; set; }
        [Display(Name="Name:")]
        public string Name { get; set; }
        [RegularExpression("^[a-z0-9_\\+-]+(\\.[a-z0-9_\\+-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*\\.([a-z]{2,4})$", ErrorMessage = "Invalid email format."), Display(Name="Email:")]
        public string Email { get; set; }
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid Phone number"), Display(Name = "Phone:")]
        public string Phone { get; set; }
        [Display(Name ="Message:")]
        public string Message { get; set; }
        [Display(Name = "Phone")]
        public bool PhoneCheck { get; set; }
        [Display(Name ="Email")]
        public bool EmailCheck { get; set; }
    }
}