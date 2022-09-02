using Server.Entities;

namespace Server.Interfaces
{
  public interface ITokenService
  {
    Task<string> CreateToken(AppUser user);
  }
}
