using System.Web;
using System.Web.Optimization;

namespace TestKendo
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {


            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.min.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/site.css"));
            bundles.Add(new ScriptBundle("~/bundles/Angular")
            .IncludeDirectory("~/Scripts/app", "*.js")
            .IncludeDirectory("~/Scripts/app/controllers", "*.js"));

        }
    }
}
