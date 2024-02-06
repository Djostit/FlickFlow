using FlickFlow.Api.Service;
using Python.Runtime;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

string pythonPath = Environment.GetEnvironmentVariable("PATH");

// Находим путь к DLL Python в переменной среды PATH
#pragma warning disable CS8602 // Dereference of a possibly null reference.
string[] paths = pythonPath.Split(Path.PathSeparator)
                                    .Where(p => p.Contains("python", StringComparison.CurrentCultureIgnoreCase))
                                    .Distinct()
                                    .ToArray();
#pragma warning restore CS8602 // Dereference of a possibly null reference.
foreach (var path in paths)
{
    string versionDigits = new(path.Where(char.IsDigit).ToArray());

    string? pythonDll = Directory.GetFiles(path, $"python*{versionDigits}.dll")
                                 .FirstOrDefault(f => f.Contains($"python{versionDigits}", StringComparison.CurrentCultureIgnoreCase));
    if (pythonDll != null)
    {
        Runtime.PythonDLL = pythonDll;
        break;
    }
}

services.AddScoped<FlickFlowPythonModule>();

services.AddRouting(x =>
{
    x.LowercaseQueryStrings = true;
    x.LowercaseUrls = true;
});

services.AddControllers();
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();