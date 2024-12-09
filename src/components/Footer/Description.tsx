import Image from "next/image";

const Description = () => {
  return (
    <div className="flex my-3">
      <div className="bg-white inline-block p-2 ml-44">
        <Image
          src="/images/elbrit-logo.png"
          alt="elbrit-logo"
          width={200}
          height={61}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,..."
        />
      </div>
      <div className="text-[#ffffff] ml-32 text-sm w-[400px] px-2 text-justify">
        Your health, physical and emotional well-being is important to us. We
        are always by your side and have made it even easier for you to find the
        necessary vitamins.
      </div>
    </div>
  );
};

export default Description;
