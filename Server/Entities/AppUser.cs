using Microsoft.AspNetCore.Identity;

namespace Server.Entities
{
    public class AppUser : IdentityUser<int>
    {
        public DateTime DateOfBirth { get; set; }
        public string? KnownAs { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string? Introduction { get; set; }
        public ICollection<Photo>? Photos { get; set; }
        public ICollection<AppUserRole> UserRoles { get; set; } = null!;
    }
}