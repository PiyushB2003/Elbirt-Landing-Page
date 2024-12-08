import Image from "next/image"

const Header = () => {
    return (
        <div className="w-full h-[50px] flex items-center">
            <div className="absolute left-[200px]">
                <Image 
                    src="/images/elbrit-logo.png" 
                    alt="elbrit-logo" 
                    width={200} 
                    height={61}
                />
            </div>
        </div>
    )
}

export default Header