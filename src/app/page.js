import About from "@/components/screen/Home/About";
import Banner from "@/components/screen/Home/Banner";
import Contact from "@/components/screen/Home/Contact";
import Faq from "@/components/screen/Home/Faq";
import Operation from "@/components/screen/Home/Operation";
import Profitability from "@/components/screen/Home/Profitability";
import WhyUs from "@/components/screen/Home/WhyUs";

export default function Home() {
  return (
    <>
      <Banner />
      <About/>
      <Operation/> {/* This component is used for explaining the fundamental process of this website */}
      <Profitability/>
      <WhyUs/>
      <Faq/>
      <Contact/>
    </>
  );
}
