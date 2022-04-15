using Microsoft.EntityFrameworkCore;
using Server.Entities;

namespace Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<AppUser> Users { get; set; } = null!;
    }
}