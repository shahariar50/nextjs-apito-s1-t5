import MainLayout from "components/layout/MainLayout";
import HeroSection from "components/page/homepage/HeroSection";
import ServiceSection from "components/page/homepage/ServiceSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceSection />
    </MainLayout>
  );
}
