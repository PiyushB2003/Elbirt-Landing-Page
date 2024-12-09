import Header from "@/components/Header/Header";
import HeroSection from "@/layouts/HeroSection";
import Ingredients from "@/layouts/Ingredients";
import "./globals.css";
import Blog from "@/layouts/Blog";

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <HeroSection />
      <div className="mt-60">
        <Ingredients />
        <Blog />
      </div>
    </div>
  );
}
