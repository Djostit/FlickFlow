using Microsoft.AspNetCore.Mvc;
using Python.Runtime;

namespace FlickFlow.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        [HttpGet("recommend")]
        public async Task<IActionResult> Recommend(string movieName, int numRecommendations = 10)
        {
            PythonEngine.Initialize();
            using (Py.GIL())
            {
                dynamic module = Py.Import("FlickFlow");
                dynamic result = module.recommend(movieName, numRecommendations);
                return Ok(result?.ToString() ?? "");
            }
        }
    }
}
