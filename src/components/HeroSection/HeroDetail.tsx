import { HeroData } from "@/utils/HeroData";
import Image from "next/image";

const HeroDetail = () => {
  return (
    <div className="mx-8">
      {HeroData.map((item) => (
        <div key={item.id} className="flex items-center gap-2 my-5">
          <Image
            src={item.image}
            alt={item.title}
            width={40}
            height={40}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..."
          />
          <div>
            <h4 className="text-[#17414F] font-bold">{item.title}</h4>
            <p className="text-[#727272] text-sm">
              {item.id === 1 ? "Increased Vitamins and" : item.title}
            </p>
            <p className="text-[#727272] text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroDetail;
