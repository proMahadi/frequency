import Image from "next/image";
import reasonImg from "@/assets/whyUsImages/reasonImage.svg";

const ReasonCard = ({ className_h3 , title , description}) => {
  return (
    <div className="reason-card">
      <Image src={reasonImg} alt="reason" className="mx-auto"/>
      <h3 className={`card-title !mt-3 mb-1.5 ${className_h3}`}>{title}</h3>
      <p className="common-paragraph">{description}</p>
    </div>
  );
};

export default ReasonCard;
