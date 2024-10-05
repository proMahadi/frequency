import Image from "next/image";
import lines from "@/assets/aboutImages/lines.svg";
import aboutFrameLine from "@/assets/aboutImages/aboutFrameLine.svg";
const About = () => {
    const aboutUs =`We are a decentralized hedge fund of algorithm capital management, with direct \nconnection to client accounts through apis with binance, orchestrating the operation \nfor all clients based on their own capital. We receive information in real time in order \nto make the  best decisions to reduce the risk of your capital.`
  return (
    <section className="bg-dark">
      <div className="container2 py-20 xl:py-0 px-3 lg:px-0 relative">
        <div className="flex items-center ">
          <div className="w-[40%] hidden md:block">
            <Image src={lines} alt="about lines" className="w-full" />
          </div>
          <div className=" md:w-[60%] text-center md:text-left flex flex-col gap-y-5 ">
            <h2 className="section-title ">about <span className="md:block text-right">us</span></h2>
            <p className="common-paragraph  relative z-50">{aboutUs}</p>
          </div>
        </div>
        <div className="absolute xl:top-0 top-[35%]">
            <Image src={aboutFrameLine} alt="frame line"/>
        </div>
      </div>
    </section>
  );
};

export default About;
