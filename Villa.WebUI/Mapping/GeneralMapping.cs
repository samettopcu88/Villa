using AutoMapper;
using Villa.Dto.Dtos.ContactDtos;
using Villa.Dto.Dtos.CounterDtos;
using Villa.DTO.Dtos.BannerDtos;
using Villa.Entity.Entites;

namespace Villa.WebUI.Mapping
{
    public class GeneralMapping : Profile
    {
        public GeneralMapping()
        {
            CreateMap<ResultBannerDto, Banner>().ReverseMap();
            CreateMap<UpdateBannerDto, Banner>().ReverseMap();
            CreateMap<CreateBannerDto, Banner>().ReverseMap();

            CreateMap<CreateContactDto, Contact>().ReverseMap();
            CreateMap<UpdateContactDto, Contact>().ReverseMap();
            CreateMap<ResultContactDto, Contact>().ReverseMap();

            CreateMap<ResultCounterDto, Counter>().ReverseMap();
            CreateMap<UpdateCounterDto, Counter>().ReverseMap();
            CreateMap<CreateCounterDto, Counter>().ReverseMap();
        }
    }
}
