import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface GeologicalServicesComponentInterface {}

export default function GeologicalServicesComponent(
  props: GeologicalServicesComponentInterface
) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    setStartAnimation(true);
    AOS.init({
      duration: 1500,
    });
    const handleScroll = () => {
      const st = window.pageYOffset;
      if (st < 10) {
        setIsHeaderShow(false);
      } else if (st > lastScrollTop) {
        setIsHeaderShow(true);
      } else {
        setIsHeaderShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar isHeaderShow={isHeaderShow} />
      <div className="relative bg-center w-full h-[calc(50vh)] md:h-[calc(70vh)] pt-[10%]">
        <Image src={AppImages.geoServicesBg} alt="Image" layout="fill" />
        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0"></div>
      </div>

      <div
        className={`relative mt-[-104px] z-10 flex justify-center px-[1%] lg:px-[8%] xl:px-[15%] transition-all duration-700 ease-in-out transform ${
          startAnimation ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white flex flex-col justify-start items-start w-[90%] md:w-[80%] h-44 md:h-52 shadow py-6 px-4 md:px-12 rounded-lg">
          <p className="text-[#757474] font-normal text-xs md:text-sm">
            Home {" > "} Services {" > "}
            <span className="text-[#D7051D]">Geological Services</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Geological Services
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Geological services Offered By Chinar minerals.
          </p>
        </div>
      </div>

      <div className="w-full px-[5%] lg:px-[8%] xl:px-[15%] my-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-2xl md:text-3xl font-bold text-center">
            Geological services include
          </p>
          <p className="text-black text-lg text-center my-6 max-w-[700px]">
            Quality-assured techniques and integrated services at our
            state-of-the art facilities or with you at the wellsite.
          </p>
        </div>
      </div>
    </div>
  );
}
