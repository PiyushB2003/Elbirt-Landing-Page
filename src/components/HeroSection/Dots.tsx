const Dots = () => {
    return (
        <div className="w-full h-[50px] flex pl-52 my-10">
        {Array.from({ length: 2 }).map((_, index) => (
            <div
            key={index}
            className="w-[40px] h-[40px] bg-[#A6B8CB] rounded-full mx-1"
            />
        ))}
        </div>
    );
};

export default Dots;
