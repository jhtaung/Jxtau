using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTOs;
using Server.Entities;
using Server.Interfaces;

namespace Server.Controllers
{
  public class AccountController : BaseController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;
        
        public AccountController(DataContext context, IMapper mapper, ITokenService tokenService)
        {  
            _context = context;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

            var user = _mapper.Map<AppUser>(registerDto);

            user.UserName = registerDto.Username.ToLower();

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new UserDto 
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            if (user == null) return Unauthorized("Invalid username");
            
            return new UserDto 
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }

        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}