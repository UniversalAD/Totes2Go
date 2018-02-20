using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Totes2Go.Startup))]
namespace Totes2Go
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
