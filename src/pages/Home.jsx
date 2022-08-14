import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";
export default function Home() {
  return (
    <div className="font-inter">
      <Header />
      <HeroSection />
      <TrendingSection/>
    </div>
  );
}
