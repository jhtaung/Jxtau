using AutoMapper;
using Server.DTOs;
using Server.Entities;

namespace Server.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => 
                    src.Photos!.FirstOrDefault()!.Url));
            CreateMap<Photo, PhotoDto>();
        }
    }
}