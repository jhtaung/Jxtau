using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.DTOs
{
    public class UserDto
    {
        public string Username { get; set; } = null!;
        public string Token { get; set; } = null!;
    }
}