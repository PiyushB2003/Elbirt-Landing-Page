import Contact from "@/components/Footer/Contact";
import Copyright from "@/components/Footer/Copyright";
import Description from "@/components/Footer/Description";

const Footer = () => {
  return (
    <div className="w-full h-[45vh] bg-[#17414F] flex flex-col justify-center">
      <Contact />
      <Description />
      <Copyright />
    </div>
  );
};

export default Footer;
