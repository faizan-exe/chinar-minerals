import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import App from "next/app";
import Footer from "../sharedComponents/Footer";

interface PricesComponentInterface {}

export default function PricesComponent(props: PricesComponentInterface) {
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
        <Image src={AppImages.aboutUs2} alt="Image" layout="fill" />
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
            <span className="text-[#D7051D]">Pricing</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Pricing
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Learn more about our financial and operationol perfomance.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between xl:gap-10 gap-5 px-[5%] lg:px-[8%] xl:px-[15%] my-10">
        <div
          className="flex flex-col md:w-[35%] lg:w-[35%]"
          data-aos="fade-right"
        >
          <div className="flex items-baseline">
            <p className="font-bold text-2xl md:text-lg lg:text-xl xl:text-2xl text-black">
              Investor Center
            </p>
            <div className="h-[2px] w-[70px] xl:w-[50px] 2xl:w-[70px] border-2 border-[#D7051D] ml-2" />
          </div>
          <div className="p-8 shadow my-5 rounded-md">
            <ul>
              <li className="text-black my-4 md:my-3">Corporate Overview</li>
              <li className="text-black my-4 md:my-3">Financial Reports</li>
              <li className="text-black my-4 md:my-3">Share Information</li>
              <li className="text-black my-4 md:my-3">Analyst Coverage</li>
              <li className="text-black my-4 md:my-3">Presentation</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:w-[55%]" data-aos="fade-left">
          <div className="flex items-baseline">
            <p className="font-bold text-2xl md:text-lg lg:text-xl xl:text-2xl text-black">
              Financial Reports
            </p>
            <div className="h-[2px] w-[70px] xl:w-[50px] 2xl:w-[70px] border-2 border-[#D7051D] ml-2" />
          </div>
          <div className="md:px-8 px-6 my-5">
            <ul>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">October 31, 2023</p>
                    <p className="text-black text-sm">
                      Annual Reports to shareholders
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">October 31, 2023</p>
                    <p className="text-black text-sm">
                      Annual Reports to shareholders
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">October 31, 2023</p>
                    <p className="text-black text-sm">
                      Annual Reports to shareholders
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">October 31, 2023</p>
                    <p className="text-black text-sm">
                      Annual Reports to shareholders
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <p className="text-black text-lg font-semibold cursor-pointer">
              View All
            </p>
          </div>
        </div>
      </div>

      <div className="px-[5%] lg:px-[8%] xl:px-[15%] my-10">
        <div className="flex items-baseline my-3">
          <p className="font-bold text-xl md:text-lg lg:text-xl xl:text-2xl text-black">
            Share Price Information
          </p>
          <div className="h-[2px] w-[70px] xl:w-[50px] 2xl:w-[70px] border-2 border-[#D7051D] ml-2" />
        </div>
        <p className="text-black text-lg my-3">Market Cap: $11.61 m</p>
        <p className="text-[#D6051D] text-base my-5">Share Price Chart</p>
        <Image src={AppImages.graph} alt="Graph" />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between xl:gap-20 gap-5 px-[5%] lg:px-[8%] xl:px-[15%] my-14">
        <div className="flex flex-col md:w-[50%]" data-aos="fade-right">
          <div className="flex items-baseline">
            <p className="font-bold text-2xl md:text-lg lg:text-xl xl:text-2xl text-black">
              Presentations
            </p>
            <div className="h-[2px] w-[70px] xl:w-[50px] 2xl:w-[70px] border-2 border-[#D7051D] ml-2" />
          </div>
          <div className="lg:px-0 px-6 lg:pl-6 my-5">
            <ul>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">June 31, 2023</p>
                    <p className="text-black text-sm">
                      Rivergold investor presentation
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">May 21, 2023</p>
                    <p className="text-black text-sm">
                      Annual Reports to shareholders
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">July 31, 2023</p>
                    <p className="text-black text-sm">
                      Annual Reports to shareholders
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
              <li className="my-4 border-b-2">
                <div className="flex w-full items-center">
                  <div className="w-[85%]">
                    <p className="text-[#D6051D] text-base">April 31, 2023</p>
                    <p className="text-black text-sm">
                      Annual Reports to shareholders
                    </p>
                  </div>
                  <div className="w-[15%] h-full flex justify-center items-center">
                    <Image
                      src={AppImages.arrowRight}
                      alt="Icon"
                      className="md:w-10 md:h-10"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <p className="text-black text-lg font-semibold cursor-pointer">
              View All
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-[30%]" data-aos="fade-left">
          <div className="flex items-baseline">
            <p className="font-bold text-2xl md:text-lg lg:text-xl xl:text-2xl text-black">
              Annual Report
            </p>
            <div className="h-[2px] w-[70px] xl:w-[50px] 2xl:w-[70px] border-2 border-[#D7051D] ml-2" />
          </div>
          <p className="text-black text-xl font-medium my-10">
            Detailed disclosure of our financial performance in 2020
          </p>
          <button className="bg-[#D7051D] py-3 px-5 text-white rounded-lg w-[50%]">
            Download
          </button>
        </div>
      </div>

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-14 lg:gap-10 2xl:gap-16 flex-col lg:flex-row">
        <div
          className="relative w-full lg:w-[50%] flex justify-center"
          data-aos="fade-right"
        >
          <div className="bg-[#f7cdd2] relative h-[calc(50vh)] lg:h-[calc(60vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)]">
            <Image
              src={AppImages.prices1}
              alt="Image"
              className="absolute right-[-20px] bottom-[-20px] lg:right-[-30px] lg:bottom-[-30px] h-[calc(50vh)] lg:h-[calc(60vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)]"
            />
            <div className="absolute bg-black opacity-40 w-full h-full right-[-20px] bottom-[-20px] lg:right-[-30px] lg:bottom-[-30px]"></div>
          </div>
        </div>
        <div
          className="w-[100%] lg:w-[50%] h-full flex items-center lg:my-[80px]"
          data-aos="fade-left"
        >
          <div className="lg:mt-5 2xl:mt-10">
            <p className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl">
              Our Perfomance
            </p>
            <p className="text-[#D7051D] font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-5">
              2023 full year results
            </p>
            <p className="xl:max-w-[80%] 2xl:text-lg lg:text-base text-sm text-black leading-loose mt-3 md:mt-5 lg:mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link
              href={
                "https://www.linkedin.com/in/liaqatsultan?originalSubdomain=pk"
              }
              target="_blank"
            >
              <button className="bg-[#D7051D] text-lg md:text-xl text-white p-3 lg:p-5 rounded-lg my-5 xl:my-8 2xl:my-5">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full flex flex-col md:flex-row gap-10 lg:gap-0 items-center px-[5%] lg:px-[8%] xl:px-[15%] py-[5%]">
        <div
          className="flex flex-col gap-8 items-start w-full md:w-[50%]"
          data-aos="fade-right"
        >
          <p className="text-[#D7051D] font-bold text-2xl">
            Subscribe to our media releases
          </p>
          <p className="text-black">
            Get updated media releases straight to your mailbox.
          </p>
        </div>
        <div
          className="flex flex-col justify-start items-start gap-5 w-full md:w-[50%] md:pl-5"
          data-aos="fade-left"
        >
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-[80%] p-3 rounded-lg text-black outline-none"
          />
          <button className="bg-[#D7051D] text-base text-white py-3 px-3 lg:px-5 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
