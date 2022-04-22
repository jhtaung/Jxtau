namespace Server.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepo UserRepo { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}