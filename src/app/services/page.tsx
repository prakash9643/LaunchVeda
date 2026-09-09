import SEOManager from "../../components/seo/SEOManager";
import ServicesClientPage from "./ServicesClientPage";

export default function Page() {
  return (
    <>
      <SEOManager
        title="Product Launch Services in India | Launch Veda"
        description="Explore Launch Veda’s product launch services for formulation, manufacturer selection, packaging, compliance, branding, website, marketplace listing, and marketing."
        canonical="https://www.launchveda.com/services"
        breadcrumb={[
          { name: "Home", item: "https://www.launchveda.com" },
          { name: "Services", item: "https://www.launchveda.com/services" }
        ]}
        service={{
          name: "Product Launch System Services",
          description: "Explore Launch Veda’s product launch services for formulation, manufacturer selection, packaging, compliance, branding, website, marketplace listing, and marketing."
        }}
      />
      <ServicesClientPage />
    </>
  );
}
