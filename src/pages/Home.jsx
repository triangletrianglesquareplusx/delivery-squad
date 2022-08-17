import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";
import NearbySection from "../components/NearbySection";
import HackatonsSection from "../components/HackatonsSection";
import GymnasiumSection from "../components/GymnasiumSection";


export default function Home() {
  return (
    <div className="font-inter">
      
      <HeroSection />
      <TrendingSection />
      <NearbySection />
      <HackatonsSection />
      <GymnasiumSection />

      
    </div>
  );
}
