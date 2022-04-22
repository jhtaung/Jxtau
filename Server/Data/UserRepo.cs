using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Server.DTOs;
using Server.Entities;
using Server.Interfaces;

namespace Server.Data
{
    public class UserRepo : IUserRepo
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public UserRepo(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _context.Users
                .Include(p => p.Photos)
                .ToListAsync();
        }

        public async Task<AppUser> GetUserByIdAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            return user!;
        }

        public async Task<AppUser> GetUserByUsernameAsync(string username)
        {
            var user = await _context.Users
                .Include(p => p.Photos)
                .SingleOrDefaultAsync(x => x.UserName == username);
            return user!;
        }

        public void Update(AppUser user)
        {
            _context.Entry(user).State = EntityState.Modified;
        }

        public Task<IEnumerable<MemberDto>> GetMembersAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<MemberDto> GetMemberAsync(string username)
        {
            var user = await _context.Users
               .Where(x => x.UserName == username)
               .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
               .SingleOrDefaultAsync();
            return user!;
        }
    }
}