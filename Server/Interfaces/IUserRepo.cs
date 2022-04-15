using Server.Entities;

namespace Server.Interfaces
{
    public interface IUserRepo
    {
        Task<IEnumerable<AppUser>>GetUsersAsync();
    }
}