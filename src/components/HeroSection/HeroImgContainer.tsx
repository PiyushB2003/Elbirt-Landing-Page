
const HeroImgContainer = () => {
  return (
    <div className="block relative bg-[#FFE9B5] h-[280px] w-[300px] rounded-tl-[80px] rounded-br-[80px] mt-12 mx-8">
      <img
        src="/images/hero-image.png"
        alt="hero-img"
        className="object-cover object-center bg-no-repeat absolute right-3 bottom-[45px] w-[310px] h-[330px]"
      />
    </div>
  );
};

export default HeroImgContainer;
