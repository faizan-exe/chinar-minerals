import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";
import Map from "../sharedComponents/Map";

interface GetAQouteComponentInterface {}

export default function GetAQouteComponent(props: GetAQouteComponentInterface) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  const [doc, setDoc] = useState<any>(null);
  let lastScrollTop = 0;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = () => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  };

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
        <Image src={AppImages.rsBg} alt="Image" layout="fill" />
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
            <span className="text-[#D7051D]">Get a Qoute</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Get a Qoute
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Welcome to Chinar by Chinar Minerals.
          </p>
        </div>
      </div>

      <div className="px-[5%] lg:px-[8%] xl:px-[15%] mt-5 my-16">
        <div className="w-full" data-aos="fade-left">
          <div className="border border-black rounded-lg px-6 py-10 mt-14">
            <div className="flex gap-12 lg:gap-5 flex-col lg:flex-row">
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
            <div className="flex gap-12 lg:gap-5 flex-col lg:flex-row mt-12">
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
            <div className="flex gap-12 lg:gap-5 flex-col lg:flex-row mt-12">
              <div className="w-full">
                <p className="text-black text-xs font-normal">Project Type</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
              <div className="w-full">
                <p className="text-black text-xs font-normal">
                  Estimate Budget
                </p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
            </div>
            <div className="flex gap-12 lg:gap-5 flex-col lg:flex-row mt-12">
              <div className="w-full">
                <p className="text-black text-xs font-normal">
                  Maximum Time for the Project
                </p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
              <div className="w-full">
                <p className="text-black text-xs font-normal">Company Name</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                />
              </div>
            </div>
            <div className="w-full mt-12">
              <p className="text-black text-xs font-normal">Message</p>
              <input
                type="text"
                className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
              />
            </div>
            <div className="w-full flex justify-center items-center mt-8">
              <div className="flex gap-2 lg:gap-4 justify-center items-center border-dashed border-2 rounded-lg p-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => {
                    if (e.target.files !== null) {
                      setDoc(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <Image
                  src={AppImages.uploadIcon}
                  alt="Icon"
                  className="h-6 w-6"
                />
                <div>
                  <p className="text-black text-base">Tap to Upload</p>
                  <p className="text-black text-xs lg:text-sm">
                    DOC or PDF | 10MB max.
                  </p>
                </div>
                <button
                  className="bg-[#D7051D] text-base md:text-lg text-white py-1 lg:py-2 px-3 lg:px-3 rounded-lg"
                  onClick={handleFile}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <button className="bg-[#D7051D] text-lg md:text-xl text-white py-2 lg:py-3 px-5 lg:px-8 rounded-lg my-5">
                Request a Qoute
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
