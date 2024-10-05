import ReasonCard from "@/common/ReasonCard";
import Image from "next/image";
import bottomVector from "@/assets/whyUsImages/bottomVector.svg"

const WhyUs = () => {
  return (
    <section>
      <div className="container py-[52px] px-3 lg:px-0">
        <div className="flex justify-around gap-x-6 gap-y-7 flex-wrap">
          <ReasonCard
            title="Top-notch technology"
            description={`We use cutting-edge AI developed by experts to provide you with an investment platform that stands out for its ability to deliver results even in complex market conditions.`}
          />
          <ReasonCard
            title="Total transparency"
            description={`We believe in transparency in everything we do. We give you access to clear and detailed information about our automated investment strategies and the performance of your portfolio`}
          />
          <ReasonCard
            title="Security and trust"
            description={`Our automated tools are backed by the supervision of investment and AI experts, giving you peace of mind that your money is in good hands`}
          />
        </div>
        <div className="mt-16 lg:mt-20 relative h-fit">
            <h2 className="section-title mx-auto text-center">why us ?</h2>
            <Image src={bottomVector} alt="bottom vector" className="absolute bottom-0"/>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
