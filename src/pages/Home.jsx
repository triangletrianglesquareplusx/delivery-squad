import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
export default function Home() {
  return (
    <div className={`flex flex-col`}>
      <Header />
      <HeroSection />
    </div>
  );
}
