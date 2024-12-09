import { IngredientsData } from "@/utils/IngredientsData";
const Ingredients = () => {
        return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-6">
                <div className="bg-white p-6 rounded-lg flex-1 basis-[40%]">
                    <p className="text-[#003569] font-semibold">INGREDIENTS</p>
                    <h2 className="text-[#17414F] mb-4 text-3xl font-bold">Better Ingredients</h2>
                    <p className="text-[#727272] text-sm">
                        Only the best when you choose products offered on our platform -
                        high-quality ingredients for high-quality products!
                    </p>
                </div>
                {
                    IngredientsData.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#E2F5FB] p-6 rounded-lg shadow hover:shadow-lg transition flex-1 basis-[20%]">
                            <h2 className="text-lg font-semibold text-[#2D3F59] mb-2">
                                {item.title}
                            </h2>
                            <p className="text-[#727272] mb-4">{item.description}</p>
                            <a href="#" className="text-[#003569] text-sm font-semibold underline">
                            SEE MORE
                            </a>
                        </div>
                        )
                    })
                }
                <div className="flex-1">
                    <img src="/images/shapes.jpeg" alt="shape" className="w-[80px] h-[10px] basis-[5%]" />
                </div>
            </div>
        </div>
        );
  };
  
  export default Ingredients;
  