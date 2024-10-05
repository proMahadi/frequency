"use client";
import Image from "next/image";
import faqLogo from "@/assets/faqImages/faqLogo.svg";
import faqLine from "@/assets/faqImages/faqLine.svg";
import { accordionData } from "@/data/accordion";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(accordionData[0]?.id);
  const toggleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null); // If clicked again, close the active one
    } else {
      setActiveAccordion(id); // Otherwise, open the clicked one
    }
  };
  return (
    <section>
      <div className="container2 py-16 lg:pt-[163px] lg:pb-[120px] px-3 lg:px-0">
        <div className="flex">
          <div className="lg:w-[50%] relative hidden lg:block">
            <Image
              src={faqLogo}
              alt="faqLogo"
              className="absolute top-0 left-[50%] translate-x-[-50%] object-contain"
            />
            <Image src={faqLine} alt="faqLine" />
          </div>
          <div className="mx-auto">
            <ul className="flex flex-col gap-y-6">
              {accordionData.map((qna) => (
                <li
                  onClick={() => toggleAccordion(qna.id)}
                  key={qna.id}
                  className="py-4 px-4 sm:px-5 w-full sm:w-[629px] text-white bg-accordion rounded-[30px]"
                >
                  <div className="rounded-[30px] border-top">
                    <div className="sm:text-center relative">
                      <h4 className="text-base md:text-lg font-semibold">{qna.question}</h4>
                      <div className="w-fit absolute top-0 right-0">
                        <FaAngleDown
                          className={`text-white transform transition-transform duration-300 ${
                            activeAccordion === qna.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out 
                        ${
                            activeAccordion ===
                            qna.id
                            ? "grid-rows-[1fr] opacity-100 max-h-[1000px]"
                            : "grid-rows-[0fr] opacity-0 max-h-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p className="common-paragraph mt-4 ">{qna.answer}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
                <Link href='#' className="text-white text-base font-bold">See more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
