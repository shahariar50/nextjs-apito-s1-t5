import MainLayout from "components/layout/MainLayout";
import HeroSection from "components/page/homepage/HeroSection";
import ServiceSection from "components/page/homepage/ServiceSection";
import StatisticsSection from "components/page/homepage/StatisticsSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceSection />
      <StatisticsSection />
    </MainLayout>
  );
}
