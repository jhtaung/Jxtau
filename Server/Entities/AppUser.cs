using Server.Extensions;

namespace Server.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string? KnownAs { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string? Introduction { get; set; }
        public ICollection<Photo>? Photos { get; set; }
        public int GetAge()
        {
            return DateOfBirth.CalculateAge();
        }
    }
}