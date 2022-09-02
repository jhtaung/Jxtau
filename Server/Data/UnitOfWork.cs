using AutoMapper;
using Server.Interfaces;

namespace Server.Data
{
  public class UnitOfWork : IUnitOfWork
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public UnitOfWork(DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _context = context;
    }

    public IUserRepo UserRepo => new UserRepo(_context, _mapper);

    public async Task<bool> Complete()
    {
      return await _context.SaveChangesAsync() > 0;
    }

    public bool HasChanges()
    {
      return _context.ChangeTracker.HasChanges();
    }
  }
}
