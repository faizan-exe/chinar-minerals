import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";
import Map from "../sharedComponents/Map";

interface ContactUsComponentInterface {}

export default function ContactUsComponent(props: ContactUsComponentInterface) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    setStartAnimation(true);
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
      <div className="relative bg-center w-full h-[calc(50vh)] md:h-[calc(100vh)] pt-[10%]">
        <Image src={AppImages.productsBg} alt="Image" layout="fill" />
        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0"></div>
      </div>
      <div
        className={`relative mt-[-104px] z-10 flex justify-center px-[1%] lg:px-[8%] xl:px-[15%] transition-all duration-700 ease-in-out transform ${
          startAnimation ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white flex flex-col justify-start items-start w-[90%] md:w-[80%] h-44 md:h-52 shadow py-6 px-4 md:px-12 rounded-lg">
          <p className="text-[#757474] font-normal text-xs md:text-sm">
            Home {" > "}
            <span className="text-[#D7051D]">Contact Us</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Contact Us
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Our purpose is to bring people and resources together to build a
            better world.
          </p>
        </div>
      </div>

      <div className="flex gap-20 lg:gap-0 flex-col lg:flex-row px-[5%] lg:px-[8%] xl:px-[15%] mt-5 my-16">
        <div className="w-full lg:w-[35%]">
          <p className="text-black text-2xl font-bold mt-6 mb-4">
            Find Us on Map
          </p>
          <p className="text-[#757474] text-sm font-normal">
            Located in Haripur, Pakistan
          </p>
          <div className="mt-5">
            <Map />
          </div>
        </div>
        <div className="w-full lg:w-[65%]">
          <p className="text-black text-2xl font-bold mt-6 mb-4">Write Us</p>
          <p className="text-[#757474]  text-sm font-normal">
            Contact Us & we will get back to you at our earliest.
          </p>
          <div className="border border-black rounded-lg px-6 py-10 mt-5">
            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="w-full">
                <p className="text-black text-xs font-normal">First Name</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
              <div className="w-full">
                <p className="text-black text-xs font-normal">Last Name</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
            </div>
            <div className="flex gap-5 flex-col lg:flex-row mt-8">
              <div className="w-full">
                <p className="text-black text-xs font-normal">Email</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
              <div className="w-full">
                <p className="text-black text-xs font-normal">Phone</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
            </div>
            <div className="w-full mt-8">
              <p className="text-black text-xs font-normal">Subject</p>
              <input
                type="text"
                className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
              />
            </div>
            <div className="w-full mt-8">
              <p className="text-black text-xs font-normal">Message</p>
              <input
                type="text"
                className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
              />
            </div>
            <div className="flex justify-between mt-8">
              <div className="w-full">
                {/* <p className="text-black text-xs font-normal">Email</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                /> */}
              </div>
              <button className="bg-[#D7051D] text-lg md:text-xl text-white py-2 lg:py-3 px-5 lg:px-8 rounded-lg my-5">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
