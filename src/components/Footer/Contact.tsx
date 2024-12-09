import { FooterData } from "@/utils/FooterData";

const Contact = () => {
  return (
    <div className="flex items-center justify-center my-3">
      {FooterData.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-[#215D72] py-3 rounded-xl mx-4 w-80 justify-center gap-2 my-5"
        >
          <img src={item.image} alt={item.type} className="w-[40px] h-[40px] mx-3" />
          <div className="mx-3">
            <h4 className="text-[#ffffff]">{item.type}</h4>
            <p className="text-[#ffffff] text-sm font-semibold">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
