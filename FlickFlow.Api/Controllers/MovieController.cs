using FlickFlow.Api.Service;
using Microsoft.AspNetCore.Mvc;
using Python.Runtime;

namespace FlickFlow.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly FlickFlowPythonModule _module = FlickFlowPythonModule.Instance;

        [HttpGet("recommend")]
        public async Task<IActionResult> Recommend(string movieName, int numRecommendations = 10)
        {
            string result = _module.Recommend(movieName, numRecommendations);
            return Ok(result);
        }
    }
}
