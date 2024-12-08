import Feature from "@/components/HeroSection/Feature";
import HeroImgContainer from "@/components/HeroSection/HeroImgContainer";
import HeroDetail from "@/components/HeroSection/HeroDetail";
import HeroAbout from "@/components/HeroSection/HeroAbout";
import Dots from "@/components/HeroSection/Dots";

const HeroSection = () => {
  return (
    <div className="h-[calc(125vh-50px)] w-full pt-10 flex flex-col items-center bg-[#E2F5FB]">
      <h1 className="text-[#003569] text-7xl text-center w-[1316px] font-bold">
        Essential Vitamins
      </h1>
      <div className="flex items-center">
        <HeroAbout />
        <HeroImgContainer />
        <HeroDetail />
      </div>
      <Dots />
      <Feature />
    </div>
  );
};

export default HeroSection;
