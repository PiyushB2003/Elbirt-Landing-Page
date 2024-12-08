import Header from "@/components/Header/Header";
import HeroSection from "@/layouts/HeroSection";
import "./globals.css";


export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <HeroSection />
    </div>
  );
}
