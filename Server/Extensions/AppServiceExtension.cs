using Microsoft.EntityFrameworkCore;
using Server.Data;

namespace Server.Extensions
{
    public static class AppServiceExtension
    {
        public static IServiceCollection AddAppServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(options => 
            { 
                options.UseSqlServer(config.GetConnectionString("DefaultConnection")); 
            });
            return services;
        }
    }
}