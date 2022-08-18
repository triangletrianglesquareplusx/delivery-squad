import HeroSection from "../Components/HeroSection/HeroSection";
import TrendingSection from "../Components/TrendingSection/TrendingSection";
import NearbySection from "../Components/NearbySection/NearbySection";
import HackatonSection from "../Components/HackatonSection/HackatonSection";
import GymnasiumSection from "../Components/GymnasiumSection/GymnasiumSection";

export default function Home() {
  return (
    <div className="font-inter">
      
      <HeroSection />
      <TrendingSection />
      <NearbySection />
      <HackatonSection />
      <GymnasiumSection />

      
    </div>
  );
}