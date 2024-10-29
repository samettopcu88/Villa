using System.Security.Cryptography.X509Certificates;
using Villa.Business.Abstract;
using Villa.Business.Concrete;
using Villa.DataAccess.Abstract;
using Villa.DataAccess.EntityFramework;
using Villa.DataAccess.Repositories;

namespace Villa.WebUI.Extensions
{
    public static class ServiceEntensions
    {
        public static void AddServiceExtensions(this IServiceCollection Services)
        {

            Services.AddScoped<IBannerDal, EFBannerDal>();
            Services.AddScoped<IBannerService, BannerManager>();

            Services.AddScoped<IContactDal, EFContactDal>();
            Services.AddScoped<IContactService, ContactManager>();

            Services.AddScoped<ICounterDal, EFCounterDal>();
            Services.AddScoped<ICounterService, CounterManager>();

            Services.AddScoped<IDealDal, EFDealDal>();
            Services.AddScoped<IDealService, DealManager>();

            Services.AddScoped<IFeatureDal, EFFeatureDal>();
            Services.AddScoped<IFeatureService, FeatureManager>();

            Services.AddScoped<IMessageDal, EFMessageDal>();
            Services.AddScoped<IMessageService, MessageManager>();

            Services.AddScoped<IProductDal, EFProductDal>();
            Services.AddScoped<IProductService, ProductManager>();

            Services.AddScoped<IQuestDal, EFQuestDal>();
            Services.AddScoped<IQuestService, QuestManager>();

            Services.AddScoped<IVideoDal, EFVideoDal>();
            Services.AddScoped<IVideoService, VideoManager>();

            Services.AddScoped(typeof(IGenericDal<>), typeof(GenericRepository<>));
            Services.AddScoped(typeof(IGenericService<>), typeof(GenericManager<>));
        }
    }
}
