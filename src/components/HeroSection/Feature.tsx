
import { FeatureData } from "@/utils/FeatureData";

const Feature = () => {
  return (
    <div className="w-[75%] bg-[#17414F] relative top-5 h-[340px] rounded-[60px] p-5">
      <div className="grid grid-cols-3 relative bottom-16 gap-10 justify-center items-center h-full">
        {FeatureData.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className={`mx-3 ${
                  item.id === 1
                    ? "w-[22px] h-[22px]"
                    : item.id === 5
                    ? "w-[35px] h-[35px]"
                    : "w-[30px] h-[30px]"
                }`}
              />
            </div>
            <div>
              <h4 className="text-[#ffffff] font-semibold text-center">
                {item.title}
              </h4>
              <p className="text-[#D9D9D9] text-sm text-center px-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
