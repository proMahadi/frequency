import StepCard from "@/common/StepCard";
import img1 from "@/assets/operationImages/img1.svg"
import img2 from "@/assets/operationImages/img2.svg"
import img3 from "@/assets/operationImages/img3.svg"
import Image from "next/image";
import lines from "@/assets/operationImages/lines.svg"

const Operation = () => {
    const description1 = `We connect our bot \ndirectly to your \naccount`;
    const description2 = `Your assets are used \nas guarantee for \nfuture operations`;
    const description3 = `Relax! Now we take \ncare of your \ninvestments`;
  return (
    <section>
      <div className="container pt-16 pb-28 px-3 lg:px-0 relative">
        <div className="text-center md:text-left">
          <h2 className="section-title ">{`how it \nworks`}</h2>
        </div>
        <div className="flex flex-wrap justify-around gap-x-6 gap-y-7 mt-4 relative z-50">
          <StepCard src={img1} title={`Connect you binance \naccount`} description={description1} />
          <StepCard src={img2} title={`Transfer your assets to \nfutures wallet`} description={description2} />
          <StepCard src={img3} title={`Start investing \nwith us`} description={description3} className_h3='text-left w-fit mx-auto'/>
        </div>
        <div className="absolute top-0">
            <Image src={lines} alt="lines"/>
        </div>
      </div>
    </section>
  );
};

export default Operation;
