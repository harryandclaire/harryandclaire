using Microsoft.AspNetCore.Mvc;

namespace ClaireAndHarry.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticateController : ControllerBase
    {
        [HttpGet]
        public bool Get(string username, string password)
        {
            if (username == "harry" && password == "smells")
            {
                return true;
            }

            return false;
        }
    }
}