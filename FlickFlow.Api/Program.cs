using Python.Runtime;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

Runtime.PythonDLL = @"C:\Users\djost\AppData\Local\Programs\Python\Python312\python312.dll";

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