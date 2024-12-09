import Image from "next/image";

const Copyright = () => {
  return (
    <div className="flex items-center ml-44 my-3">
      <Image
        src="/images/Group.png"
        className="mx-1"
        alt="location"
        width={15}
        height={15}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
      <p className="text-white text-sm mx-1">
        Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
      </p>
    </div>
  );
};

export default Copyright;
