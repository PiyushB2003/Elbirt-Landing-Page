import Image from "next/image";

const HeroImgContainer = () => {
  return (
    <div className="block relative bg-[#FFE9B5] h-[280px] w-[300px] rounded-tl-[80px] rounded-br-[80px] mt-12 mx-8">
      <Image
        src="/images/hero-image.png"
        alt="hero-image"
        width={310}
        height={330}
        className=" object-cover object-center bg-no-repeat absolute right-3 bottom-[45px]"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </div>
  );
};

export default HeroImgContainer;
