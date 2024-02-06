using Python.Runtime;

namespace FlickFlow.Api.Service
{
    public class FlickFlowPythonModule
    {
        private static readonly Lazy<FlickFlowPythonModule> _instance = new(() => new FlickFlowPythonModule());

        private readonly dynamic _module;
        public FlickFlowPythonModule()
        {
            PythonEngine.Initialize();
            using (Py.GIL())
            {
                _module = Py.Import("FlickFlow");
            }
        }
        public static FlickFlowPythonModule Instance => _instance.Value;

        public string Recommend(string movieName, int numRecommendations = 10)
        {
            using (Py.GIL())
            {
                dynamic result = _module.recommend(movieName, numRecommendations);
                return result?.ToString() ?? "";
            }
        }
    }
}
