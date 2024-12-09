import { HeroData } from "@/utils/HeroData";

const HeroDetail = () => {
  return (
    <div className="mx-8">
      {HeroData.map((item) => (
        <div key={item.id} className="flex items-center gap-2 my-5">
          <img src={item.image} alt={item.title} className="w-[40px] h-[40px]" />
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
