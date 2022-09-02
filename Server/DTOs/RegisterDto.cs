using System.ComponentModel.DataAnnotations;

namespace Server.DTOs
{
  public class RegisterDto
  {
    [Required]
    public string Username { get; set; } = null!;

    [Required]
    [StringLength(8, MinimumLength = 4)]
    public string Password { get; set; } = null!;

    [Required]
    public string KnownAs { get; set; } = null!;
  }
}
