import Image from "next/image"

const Header = () => {
    return (
        <div className="w-full h-[71px]">
            <div className="absolute left-[304.79px]">
                <Image 
                    src="/images/elbrit-logo.png" 
                    alt="elbrit-logo" 
                    width={313.26} 
                    height={61} 
                    className=""
                />
            </div>
        </div>
    )
}

export default Header