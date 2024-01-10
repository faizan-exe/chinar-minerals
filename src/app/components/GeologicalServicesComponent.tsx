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
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <p className="text-black text-2xl md:text-3xl font-bold text-center">
            Geological services include
          </p>
          <p className="text-black text-base md:text-lg text-center my-6 max-w-[700px]">
            Quality-assured techniques and integrated services at our
            state-of-the art facilities or with you at the wellsite.
          </p>
        </div>
      </div>

      <div className="w-full px-[5%] lg:px-[8%] xl:px-[15%] my-10">
        <div
          className="w-full flex gap-10 md:gap-6 flex-col md:flex-row"
          data-aos="fade-up"
        >
          <div className="w-full md:w-[33%]">
            <Image src={AppImages.geoService1} alt="Image" />
            <p className="text-black text-lg md:text-xl font-bold my-2 md:my-4">
              Laboratory Services
            </p>
            <p className="text-black text-base my-2 md:my-6 max-w-[700px]">
              Our leading sample preparation & thin sectioning, biostratigraphy,
              mineralogy and geochemistry expertise enhance understanding of
              your prospects.
            </p>
          </div>
          <div className="w-full md:w-[33%]">
            <Image src={AppImages.geoService2} alt="Image" />
            <p className="text-black text-lg md:text-xl font-bold my-2 md:my-4">
              Wellsite Services
            </p>
            <p className="text-black text-base my-2 md:my-6 max-w-[700px]">
              Our leading sample preparation & thin sectioning, biostratigraphy,
              mineralogy and geochemistry expertise enhance understanding of
              your prospects.  
            </p>
          </div>
          <div className="w-full md:w-[33%]">
            <Image src={AppImages.geoService3} alt="Image" />
            <p className="text-black text-lg md:text-xl font-bold my-2 md:my-4">
              Fluid Systems Analysis
            </p>
            <p className="text-black text-base my-2 md:my-6 max-w-[700px]">
              Our leading sample preparation & thin sectioning, biostratigraphy,
              mineralogy and geochemistry expertise enhance understanding of
              your prospects.  
            </p>
          </div>
        </div>
        <div
          className="w-full flex gap-6 flex-col md:flex-row mt-10"
          data-aos="fade-up"
        >
          <div className="w-full md:w-[33%]">
            <Image src={AppImages.geoService4} alt="Image" />
            <p className="text-black text-lg md:text-xl font-bold my-2 md:my-4">
              Reservoir
            </p>
            <p className="text-black text-base my-2 md:my-6 max-w-[700px]">
              Our leading sample preparation & thin sectioning, biostratigraphy,
              mineralogy and geochemistry expertise enhance understanding of
              your prospects.
            </p>
          </div>
          <div className="w-full md:w-[33%]">
            <Image src={AppImages.geoService5} alt="Image" />
            <p className="text-black text-lg md:text-xl font-bold my-2 md:my-4">
              Field Development
            </p>
            <p className="text-black text-base my-2 md:my-6 max-w-[700px]">
              Our leading sample preparation & thin sectioning, biostratigraphy,
              mineralogy and geochemistry expertise enhance understanding of
              your prospects.
            </p>
          </div>
          <div className="w-full md:w-[33%]">
            <Image src={AppImages.geoService6} alt="Image" />
            <p className="text-black text-lg md:text-xl font-bold my-2 md:my-4">
              Reserves Certification
            </p>
            <p className="text-black text-base my-2 md:my-6 max-w-[700px]">
              Our leading sample preparation & thin sectioning, biostratigraphy,
              mineralogy and geochemistry expertise enhance understanding of
              your prospects.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] pl-0 lg:pr-10 lg:mt-10 mt-10 mb-0 h-[calc(60vh)] lg:h-[calc(60vh)] xl:h-[calc(50vh)] flex flex-col lg:flex-row items-center">
        <div
          className="relative w-full h-full lg:w-[45%]"
          data-aos="fade-right"
        >
          <Image
            src={AppImages.services1}
            alt="Image"
            layout="fill"
            className="absolute"
          />
          <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0" />
          <div
            className="absolute flex flex-col justify-center px-10 z-10 w-full lg:w-[80%] h-full"
            data-aos="fade-right"
          >
            <p className="text-white text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-10 abolute">
              Our Successful <br />
              Projects
            </p>
            <p className="text-white text-sm">
              We recognise our business interacts with a range of material
              sustainability issue areas.
            </p>
          </div>
        </div>

        <div
          className="hidden lg:flex lg:flex-row gap-6 w-full lg:w-[80%] xl:w-[70%] ml-[-80px] z-10 justify-center items-center"
          data-aos="fade-left"
        >
          <div className="flex flex-col bg-[#f3f3f3] lg:w-[30%] shadow rounded-3xl">
            <div className="relative w-full h-36">
              <Image
                src={AppImages.rs4}
                alt="Icon"
                layout="fill"
                className="absoltue"
              />
            </div>
            <div className="w-full p-3 xl:p-5 h-40">
              <p className="font-bold text-[#D7051D]">Translucent</p>
              <p className="text-black text-sm my-1 xl:my-3">
                Allows for creative lighting and flexible design.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#f3f3f3] lg:w-[30%] shadow rounded-3xl">
            <div className="relative w-full h-36">
              <Image
                src={AppImages.rs5}
                alt="Icon"
                layout="fill"
                className="absoltue"
              />
            </div>
            <div className="w-full p-3 xl:p-5 h-40">
              <p className="font-bold text-[#D7051D]">Extreme Durability</p>
              <p className="text-black text-sm my-1 xl:my-3">
                Withstands wear and tear over extended periods.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#f3f3f3] lg:w-[30%] shadow rounded-3xl">
            <div className="relative w-full h-36">
              <Image
                src={AppImages.rs6}
                alt="Icon"
                layout="fill"
                className="absoltue"
              />
            </div>
            <div className="w-full p-3 xl:p-5 h-40">
              <p className="font-bold text-[#D7051D]">Provides Heat Proofing</p>
              <p className="text-black text-sm my-1 xl:my-3">
                Enhances thermal insulation for comfortable interiors.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#f3f3f3] lg:w-[30%] shadow rounded-3xl">
            <div className="relative w-full h-36">
              <Image
                src={AppImages.rs7}
                alt="Icon"
                layout="fill"
                className="absoltue"
              />
            </div>
            <div className="w-full p-3 xl:p-5 h-40">
              <p className="font-bold text-[#D7051D]">Structural Stability</p>
              <p className="text-black text-sm my-1 xl:my-3">
                Offers robust support and longevity to structures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] flex flex-col lg:hidden gap-8 w-full z-10 justify-center px-[5%] py-10">
        <div
          className="flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl"
          data-aos="fade-down"
        >
          <div className="relative w-full h-44">
            <Image
              src={AppImages.rs4}
              alt="Icon"
              layout="fill"
              className="absoltue"
            />
          </div>
          <div className="w-full p-5">
            <p className="font-bold text-[#D7051D]">Translucent</p>
            <p className="text-black text-sm my-1 xl:my-3">
              Allows for creative lighting and flexible design.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl"
          data-aos="fade-down"
        >
          <div className="relative w-full h-44">
            <Image
              src={AppImages.rs5}
              alt="Icon"
              layout="fill"
              className="absoltue"
            />
          </div>
          <div className="w-full p-5">
            <p className="font-bold text-[#D7051D]">Extreme Durability</p>
            <p className="text-black text-sm my-1 xl:my-3">
              Withstands wear and tear over extended periods.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl"
          data-aos="fade-down"
        >
          <div className="relative w-full h-44">
            <Image
              src={AppImages.rs6}
              alt="Icon"
              layout="fill"
              className="absoltue"
            />
          </div>
          <div className="w-full p-5">
            <p className="font-bold text-[#D7051D]">Provides Heat Proofing</p>
            <p className="text-black text-sm my-1 xl:my-3">
              Enhances thermal insulation for comfortable interiors.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl"
          data-aos="fade-down"
        >
          <div className="relative w-full h-44">
            <Image
              src={AppImages.rs7}
              alt="Icon"
              layout="fill"
              className="absoltue"
            />
          </div>
          <div className="w-full p-5">
            <p className="font-bold text-[#D7051D]">Structural Stability</p>
            <p className="text-black text-sm my-1 xl:my-3">
              Offers robust support and longevity to structures.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full flex flex-col md:flex-row gap-10 lg:gap-0 justify-between items-center px-[5%] md:px-[10%] py-[5%]">
        <div className="flex flex-col items-start w-full" data-aos="fade-right">
          <p className="text-[#D7051D] font-bold text-2xl">
            Committed to Excellence
          </p>
          <p className="text-black">
            We are committed to keeping our people healthy and safe
          </p>
        </div>
        <div
          className="flex justify-start md:justify-end w-full md:w-[30%]"
          data-aos="fade-left"
        >
          <Link href={"/pages/services"}>
            <button className="bg-[#D7051D] font-bold text-lg md:text-xl text-white p-3 lg:p-5 rounded-lg">
              How We work
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
