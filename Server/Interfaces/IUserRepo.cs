using Server.DTOs;
using Server.Entities;

namespace Server.Interfaces
{
  public interface IUserRepo
  {
    Task<IEnumerable<AppUser>> GetUsersAsync();
    Task<AppUser> GetUserByIdAsync(int id);
    Task<AppUser> GetUserByUsernameAsync(string username);
    Task<IEnumerable<MemberDto>> GetMembersAsync();
    Task<MemberDto> GetMemberAsync(string username);
    void Update(AppUser user);
  }
}
