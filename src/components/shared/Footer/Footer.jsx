import Image from "next/image";
import footerLogo from "@/assets/footerLogo.svg";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";


const Footer = () => {
  return (
    <section>
      <div className="container2 border-x-4 border-t-4 border-light rounded-t-[120px] pt-8 pb-10 px-20">
        <div className="flex items-center justify-around gap-x-6 gap-y-7 flex-wrap">
          <div>
            <Image src={footerLogo} alt="footer logo" />
          </div>
          <div>
            <ul  className="flex gap-x-7 text-white font-bold text-base">
              <li className="hover:text-light">
                <Link href="#">Terms of service</Link>
              </li>
              <li className="hover:text-light">
                <Link href="#">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="text-white font-bold text-base">
            <Link href="#">
              <div className="flex items-center">
                <span>Follow us</span>
                <div className="w-9 h-9 rounded-full bg-[#142E47] flex items-center justify-center"><RiInstagramFill className="text-light/50 text-base" /></div>
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center">
                <span>
                  Contact <span className="block">us</span>
                </span>
                <div className="w-9 h-9 rounded-full bg-[#142E47] flex items-center justify-center"><FaGoogle className="text-light/50 text-base"/></div>
                <Link 
                // href='#'
                href="mailto:social@frequencyinvest.com"
                >social@frequencyinvest.com </Link>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-light to-transparent h-6 w-full mt-10"></div>
      </div>
    </section>
  );
};

export default Footer;
