import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "../styles/style.css";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

const gpServicesdata = [
  {
    text: [
      "Five Seismic Crews are in operation with Vibroseis & Dynamite Energy Source.",
      "2D/3D Seismic Data Acquisition Operations.",
      "On site Quality Control and Processing up to Brute stack.",
      "High Accuracy & Reliable Surveying with RTK GPS System.",
      "Trimble TBC, Leica GEO.OFFICE & SKI-PRO Software for Post Processing of GPS Survey Data.",
      "Refraction Survey and Up-hole Logging.",
      "All Crews equipped with Modern Communications system.",
    ],
    image: AppImages.geoPhyServices1,
  },
  {
    text: [
      "2D/3D Seismic Data Acquisition Operations.",
      "Five Seismic Crews are in operation with Vibroseis & Dynamite Energy Source.",
      "On site Quality Control and Processing up to Brute stack.",
      "High Accuracy & Reliable Surveying with RTK GPS System.",
      "Trimble TBC, Leica GEO.OFFICE & SKI-PRO Software for Post Processing of GPS Survey Data.",
      "Refraction Survey and Up-hole Logging.",
      "All Crews equipped with Modern Communications system.",
    ],
    image: AppImages.geoPhyServices2,
  },
  {
    text: [
      "High Accuracy & Reliable Surveying with RTK GPS System.",
      "Five Seismic Crews are in operation with Vibroseis & Dynamite Energy Source.",
      "2D/3D Seismic Data Acquisition Operations.",
      "On site Quality Control and Processing up to Brute stack.",
      "Trimble TBC, Leica GEO.OFFICE & SKI-PRO Software for Post Processing of GPS Survey Data.",
      "Refraction Survey and Up-hole Logging.",
      "All Crews equipped with Modern Communications system.",
    ],
    image: AppImages.geoPhyServices3,
  },
];

interface GeophysicalServicesComponentInterface {}

export default function GeophysicalServicesComponent(
  props: GeophysicalServicesComponentInterface
) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelectIndex = (index: any) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsAnimating(false);
    }, 200);

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
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
            <span className="text-[#D7051D]">Geophysical Services</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Geophysical Services
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
          <p className="text-black text-2xl md:text-3xl font-bold text-center max-w-[700px]">
            Unveiling the Depths: Geophysical Services for Precision Subsurface
            Exploration
          </p>
          <p className="text-black text-base md:text-lg text-center my-6 max-w-[700px]">
            Geophysical services play a fundamental role in subsurface
            exploration for mining and mineral activities. These services employ
            advanced techniques such as seismic, magnetic, and gravity surveys
            to unveil the hidden characteristics of the Earth's subsurface. By
            analyzing variations in the physical properties of rocks and
            materials beneath the surface, geophysical methods provide
            invaluable insights into potential mineral deposits, structural
            geology, and the overall composition of the subsurface environment.
            This non-invasive approach allows mining companies to make informed
            decisions about resource exploration, optimize drilling efforts, and
            mitigate risks associated with geological uncertainties. Geophysical
            services are indispensable tools that enhance the efficiency and
            accuracy of subsurface assessments, contributing significantly to
            the success of mineral exploration and extraction projects.
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold text-center">
            Exploring Depths: Geophysical Techniques
          </p>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full px-[5%] lg:px-[8%] xl:px-[15%] my-10 p-10">
        <div className="flex justify-between items-center">
          <p
            className="text-black text-2xl md:text-3xl font-bold max-w-[550px] my-5 basis-10/12"
            data-aos="fade-right"
          >
            Reliable & High-Quality Geophysical Analysis Services
          </p>
          <p
            className="text-[#D7051D] text-lg tracking-widest font-normal basis-2/12 cursor-pointer"
            data-aos="fade-left"
          >
            <span
              onClick={() => {
                if (selectedIndex === 0) handleSelectIndex(2);
                else handleSelectIndex(selectedIndex - 1);
              }}
            >
              {"<"}
            </span>
            <span className="text-black">{selectedIndex + 1}</span>/3{" "}
            <span
              onClick={() => {
                if (selectedIndex === 2) handleSelectIndex(0);
                else handleSelectIndex(selectedIndex + 1);
              }}
            >
              {">"}
            </span>
          </p>
        </div>
        <div
          className="w-full flex items-center gap-3 md:gap-6 xl:gap-10 my-8"
          data-aos="fade-right"
        >
          <div
            style={{
              backgroundColor: selectedIndex === 0 ? "#D7051D" : "white",
            }}
            className="shadow lg:w-[25%] w-[30%] h-36 md:h-40 lg:h-48 flex gap-3 flex-col items-center px-[4px] lg:px-0 py-2 md:py-2 lg:py-4 rounded-lg cursor-pointer"
            onClick={() => handleSelectIndex(0)}
          >
            <div className="flex justify-center items-center basis-3/5">
              <Image
                src={
                  selectedIndex === 0
                    ? AppImages.geoPhyIcon1White
                    : AppImages.geoPhyIcon1
                }
                alt="Image"
                className="w-16 h-20 md:h-24 md:w-20 lg:h-28 lg:w-24"
              />
            </div>
            <p
              style={{
                color: selectedIndex === 0 ? "white" : "black",
              }}
              className="text-[10px] md:text-xs lg:text-sm lg:max-w-[80%] text-center basis-2/5"
            >
              Quality Seismic Data Acquisition
            </p>
          </div>
          <div
            style={{
              backgroundColor: selectedIndex === 1 ? "#D7051D" : "white",
            }}
            className="shadow lg:w-[25%] w-[30%] h-36 md:h-40 lg:h-48 flex gap-3 flex-col items-center px-[4px] lg:px-0 py-2 md:py-2 lg:py-4 rounded-lg cursor-pointer"
            onClick={() => handleSelectIndex(1)}
          >
            <div className="flex justify-center items-center basis-3/5">
              <Image
                src={
                  selectedIndex === 1
                    ? AppImages.geoPhyIcon2White
                    : AppImages.geoPhyIcon2
                }
                alt="Image"
                className="w-16 h-20 md:h-24 md:w-20 lg:h-28 lg:w-24"
              />
            </div>
            <p
              style={{
                color: selectedIndex === 1 ? "white" : "black",
              }}
              className="text-[9px] text-black md:text-xs lg:text-sm lg:max-w-[90%] text-center basis-2/5"
            >
              Geophysical Equipment & Services
            </p>
          </div>
          <div
            style={{
              backgroundColor: selectedIndex === 2 ? "#D7051D" : "white",
            }}
            className=" shadow lg:w-[25%] w-[30%] h-36 md:h-40 lg:h-48 flex gap-3 flex-col items-center px-[4px] lg:px-0 py-2 md:py-2 lg:py-4 rounded-lg cursor-pointer"
            onClick={() => handleSelectIndex(2)}
          >
            <div className="flex justify-center items-center basis-3/5">
              <Image
                src={
                  selectedIndex === 2
                    ? AppImages.geoPhyIcon3White
                    : AppImages.geoPhyIcon3
                }
                alt="Image"
                className="w-16 h-20 md:h-24 md:w-20 lg:h-28 lg:w-24"
              />
            </div>
            <p
              style={{
                color: selectedIndex === 2 ? "white" : "black",
              }}
              className="text-[10px] md:text-xs lg:text-sm lg:max-w-[80%] text-center basis-2/5"
            >
              Geophysical gravity surveys
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 my-16">
          <div className="w-full md:w-[50%]" data-aos="fade-right">
            <div className={` ${isAnimating ? "animate-fade" : ""}`}>
              <Image
                src={gpServicesdata[selectedIndex].image}
                alt="Image"
                className="fade-image"
              />
            </div>
          </div>
          <div
            className="w-full md:w-[50%] flex items-center"
            data-aos="fade-left"
          >
            <div className={` ${isAnimating ? "animate-fade" : ""}`}>
              <ul
                role="list"
                className="marker:text-black list-disc pl-5 space-y-3 text-black text-base"
              >
                {gpServicesdata[selectedIndex].text.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[5%] lg:px-[8%] xl:px-[10%] 2xl:px-[15%] my-14">
        <div className="w-full flex gap-5 lg:gap-0 flex-col lg:flex-row items-center my-4 md:my-8">
          <div className="w-full lg:w-[50%]">
            <p className="text-black text-2xl md:text-3xl font-bold">
              OUR APPROACH
            </p>
            <div className="flex items-baseline">
              <p className="text-[#D7051D] text-2xl md:text-3xl font-bold">
                TO SUSTAINABILITY
              </p>
              <div className="h-[2px] w-[70px] xl:w-[50px] 2xl:w-[70px] border-2 border-[#D7051D] ml-2" />
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <p className="text-black text-lg md:text-xl font-bold">
              We are focused on operating sustainably, ensuring the health and
              safety of our people, and building strong relationships with
              communities.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 items-center">
          <div className="w-full lg:w-[40%]">
            <div className="flex flex-col bg-[#f3f3f3] shadow rounded-3xl w-full lg:w-[70%]">
              <div className="relative w-full h-52">
                <Image src={AppImages.geoPhyService1} alt="Image" fill />
              </div>
              <div className="w-full p-5">
                <p className="text-black text-lg text-center font-semibold md:my-2 xl:my-4">
                  Biodiversity and Closure
                </p>
                <p className="text-black text-sm text-center md:text-base">
                  Effectively managing biodiversity, reclamation and closure is
                  part of our commitment to responsible resource development.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-10 lg:gap-4 xl:gap-10 lg:w-[60%]">
            <div className="flex flex-row gap-5 w-full lg:w-[80%] xl:w-[60%]">
              <div className="flex flex-col justify-center items-center gap-4 shadow rounded-lg py-8 px-4 w-[50%] ">
                <Image
                  src={AppImages.geoPhy1}
                  alt="Image"
                  className="h-20 w-20 basis-[60%]"
                />
                <p className="text-black text-center basis-[40%]">
                  Biodiversity and closure
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 shadow rounded-lg py-8 px-4 w-[50%]">
                <Image
                  src={AppImages.geoPhy2}
                  alt="Image"
                  className="h-20 w-20 basis-[60%]"
                />
                <p className="text-black text-center basis-[40%]">
                  Climate Change
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-full lg:w-[80%] xl:w-[60%]">
              <div className="flex flex-col justify-center items-center gap-4 shadow rounded-lg py-8 px-4 w-[50%]">
                <Image
                  src={AppImages.geoPhy3}
                  alt="Image"
                  className="h-20 w-20 basis-[60%]"
                />
                <p className="text-black text-center basis-[40%]">
                  Communities and indigenous people
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 shadow rounded-lg py-8 px-4 w-[50%]">
                <Image
                  src={AppImages.geoPhy4}
                  alt="Image"
                  className="h-20 w-20 basis-[60%]"
                />
                <p className="text-black text-center basis-[40%]">
                  Health and safety
                </p>
              </div>
            </div>
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
