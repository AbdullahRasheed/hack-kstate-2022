using Microsoft.AspNetCore.Authentication.Cookies;
using user_service.Database;

var builder = WebApplication.CreateBuilder(args);

var CorsPolicy = "_allowOrigins";

// Add services to the container.

builder.Services.Configure<UserDatabaseSettings>(
    builder.Configuration.GetSection("UserDatabase")
);

builder.Services.AddCors(options =>
{
    options.AddPolicy(CorsPolicy, policy =>
    {
        policy.WithOrigins("http://localhost:3000");
        policy.AllowAnyHeader();
    });
});

builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<LoginService>();

builder.Services.AddControllers();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options =>
{
    options.ExpireTimeSpan = TimeSpan.FromDays(1);
    options.SlidingExpiration = true;
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(CorsPolicy);

app.UseCookiePolicy(new CookiePolicyOptions
{
    MinimumSameSitePolicy = SameSiteMode.Strict
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
