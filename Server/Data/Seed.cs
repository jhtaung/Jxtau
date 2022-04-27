using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Server.Entities;

namespace Server.Data
{
  public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            if (await context.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            if (users == null) return;

            foreach (var user in users)
            {
                user.UserName = user.UserName.ToLower();
                context.Users.Add(user);
            }

            await context.SaveChangesAsync();
        }
    }
}