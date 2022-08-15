import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";
import NearbySection from "../components/NearbySection";
export default function Home() {
  return (
    <div className="font-inter">
      <Header />
      <HeroSection />
      <TrendingSection/>
      <NearbySection/>
    </div>
  );
}
