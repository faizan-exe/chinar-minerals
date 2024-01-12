import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

const gcServicesdata = [
  {
    heading: "Metallic Screening",
    text1:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition of geological materials. Through advanced analytical techniques, these services",
    text2:
      "Lorem Ipsum is simply dummy text of the printing /n Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    image1: AppImages.gcData11,
    image2: AppImages.gcData12,
  },
  {
    heading: "PhotoAssay Analysis",
    text1:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition of geological materials. Through advanced analytical techniques, these services",
    text2:
      "Lorem Ipsum is simply dummy text of the printing /n Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    image1: AppImages.gcData21,
    image2: AppImages.gcData22,
  },
  {
    heading: "Carbon, sulphur & mercury analysis",
    text1:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition of geological materials. Through advanced analytical techniques, these services",
    text2:
      "Lorem Ipsum is simply dummy text of the printing /n Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    image1: AppImages.gcData31,
    image2: AppImages.gcData32,
  },
  {
    heading: "Specific gravity testing",
    text1:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition of geological materials. Through advanced analytical techniques, these services",
    text2:
      "Lorem Ipsum is simply dummy text of the printing /n Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    image1: AppImages.gcData41,
    image2: AppImages.gcData42,
  },
  {
    heading: "Ultra-trace metal analysis by digestion",
    text1:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition of geological materials. Through advanced analytical techniques, these services",
    text2:
      "Lorem Ipsum is simply dummy text of the printing /n Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    image1: AppImages.gcData51,
    image2: AppImages.gcData52,
  },
];

const gcServicesdata2 = [
  {
    image1: AppImages.geoService7,
    heading1: "Analytical Techniques",
    text1:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition",
    heading2: "Analytical Techniques",
    text2:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition",
    image2: AppImages.geoService8,
  },
  {
    image1: AppImages.geoService7,
    heading1: "Technical Techniques",
    text1:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition",
    heading2: "Technical Techniques",
    text2:
      "At Chinar Minerals Geochemical services play a pivotal role in mining and mineral exploration by providing essential insights into the composition",
    image2: AppImages.geoService8,
  },
];

interface GeochemicalServicesComponentInterface {}

export default function GeochemicalServicesComponent(
  props: GeochemicalServicesComponentInterface
) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndex2, setSelectedIndex2] = useState(0);
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
            <span className="text-[#D7051D]">Geochemical Services</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Geochemical Services
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
            Unlocking the Power of Geochemical Services in Mining
          </p>
          <p className="text-black text-base md:text-lg text-center my-6 max-w-[700px]">
            At Chinar Minerals Geochemical services play a pivotal role in
            mining and mineral exploration by providing essential insights into
            the composition of geological materials. Through advanced analytical
            techniques, these services enable precise identification and
            quantification of various elements, minerals, and compounds present
            in rock samples, soils, and water. Such detailed chemical analysis
            is instrumental in assessing the economic viability of mining
            projects, guiding exploration efforts, and optimizing mineral
            processing. Geochemical data not only aids in the discovery of
            valuable resources but also informs crucial decisions related to
            environmental impact assessments and sustainable mining practices.
            By offering a deeper understanding of the earth's composition,
            geochemical services contribute significantly to the efficiency,
            safety, and environmental responsibility of the mining industry.
          </p>
        </div>
      </div>

      <div className="w-full px-[5%] lg:px-[8%] xl:px-[10%] 2xl:px-[15%] my-10">
        <p
          className="text-black text-2xl md:text-3xl font-bold text-center my-5"
          data-aos="fade-down"
        >
          Reliable & High-Quality Geochemical Analysis Services
        </p>
        <div
          className="w-full flex justify-evenly gap-1 md:gap-2 lg:gap-4 xl:gap-6 2xl:gap-10"
          data-aos="fade-right"
        >
          <div
            style={{
              backgroundColor: selectedIndex === 0 ? "#D7051D" : "white",
            }}
            className="shadow w-[20%] flex gap-3 flex-col items-center px-[2px] lg:px-0 py-1 md:py-2 lg:py-4 xl:py-6 2xl:py-8 rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(0)}
          >
            <Image
              src={
                selectedIndex === 0 ? AppImages.gcIcon2White : AppImages.gcIcon2
              }
              alt="Image"
              className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
            />
            <p
              style={{
                color: selectedIndex === 0 ? "white" : "black",
              }}
              className="text-[8px] md:text-xs lg:text-sm lg:max-w-[70%] text-center"
            >
              Metallic screening
            </p>
          </div>
          <div
            style={{
              backgroundColor: selectedIndex === 1 ? "#D7051D" : "white",
            }}
            className="shadow w-[20%] flex gap-3 flex-col items-center px-[2px] lg:px-0 py-1 md:py-2 lg:py-4 xl:py-6 2xl:py-8 rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(1)}
          >
            <Image
              src={
                selectedIndex === 1 ? AppImages.gcIcon1White : AppImages.gcIcon1
              }
              alt="Image"
              className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
            />
            <p
              style={{
                color: selectedIndex === 1 ? "white" : "black",
              }}
              className="text-[8px] md:text-xs lg:text-sm lg:max-w-[70%] text-center"
            >
              PhotonAssay™ analysis
            </p>
          </div>
          <div
            style={{
              backgroundColor: selectedIndex === 2 ? "#D7051D" : "white",
            }}
            className=" shadow w-[20%] flex gap-3 flex-col items-center px-[2px] lg:px-0 py-1 md:py-2 lg:py-4 xl:py-6 2xl:py-8 rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(2)}
          >
            <Image
              src={
                selectedIndex === 2 ? AppImages.gcIcon3White : AppImages.gcIcon3
              }
              alt="Image"
              className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
            />
            <p
              style={{
                color: selectedIndex === 2 ? "white" : "black",
              }}
              className="text-[8px] md:text-xs lg:text-sm lg:max-w-[70%] text-center"
            >
              Carbon, sulphur & mercury analysis
            </p>
          </div>
          <div
            style={{
              backgroundColor: selectedIndex === 3 ? "#D7051D" : "white",
            }}
            className="shadow w-[20%] flex gap-3 flex-col items-center px-[2px] lg:px-0 py-1 md:py-2 lg:py-4 xl:py-6 2xl:py-8 rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(3)}
          >
            <Image
              src={
                selectedIndex === 3 ? AppImages.gcIcon4White : AppImages.gcIcon4
              }
              alt="Image"
              className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
            />
            <p
              style={{
                color: selectedIndex === 3 ? "white" : "black",
              }}
              className="text-[8px] md:text-xs lg:text-sm lg:max-w-[70%] text-center"
            >
              Specific gravity testing
            </p>
          </div>
          <div
            style={{
              backgroundColor: selectedIndex === 4 ? "#D7051D" : "white",
            }}
            className="shadow w-[20%] flex gap-3 flex-col items-center px-[2px] lg:px-0 py-1 md:py-2 lg:py-4 xl:py-6 2xl:py-8 rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(4)}
          >
            <Image
              src={
                selectedIndex === 4 ? AppImages.gcIcon5White : AppImages.gcIcon5
              }
              alt="Image"
              className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
            />
            <p
              style={{
                color: selectedIndex === 4 ? "white" : "black",
              }}
              className="text-[8px] md:text-xs lg:text-sm lg:max-w-[70%] text-center"
            >
              Ultra-trace metal analysis by digestion
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex px-[5%] lg:px-[8%] xl:px-[10%] 2xl:px-[15%] mt-10 lg:mt-20 mb-10">
        <div className="w-full md:w-[45%]" data-aos="fade-right">
          <p className="text-black text-xl md:text-2xl font-bold">
            {gcServicesdata[selectedIndex].heading}
          </p>
          <p className="text-black text-sm md:text-base my-6 md:max-w-[85%]">
            {gcServicesdata[selectedIndex].text1}
          </p>
          <p className="text-black text-sm md:text-base my-6 md:max-w-[70%]">
            {gcServicesdata[selectedIndex].text2}
          </p>
          <button className="bg-[#D7051D] font-bold text-lg md:text-xl text-white p-3 lg:p-5 rounded-lg">
            How We work
          </button>
        </div>
        <div className="hidden md:block md:w-[55%]" data-aos="fade-left">
          <div className="flex justify-end items-start w-full h-full mt-5">
            <div className="xl:w-[75%] w-[70%] xl:h-[75%] h-[70%] relative">
              <Image
                src={gcServicesdata[selectedIndex].image1}
                alt="Image"
                fill
              />
              <Image
                src={gcServicesdata[selectedIndex].image2}
                alt="Image"
                className="absolute left-[-120px] bottom-[-80px] h-[60%] w-[60%]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center px-[5%] lg:px-[8%] xl:px-[10%] 2xl:px-[15%] mt-14 mb-10 md:mb-0 relative h-full md:h-[calc(60vh)]">
        <div className="absolute w-[50%] h-full top-0 left-0 bg-white" />
        <div className="hidden md:block absolute w-[50%] h-full top-0 right-0 bg-[#D7051D]" />
        <div className="w-full md:w-[40%] z-20" data-aos="fade-right">
          <p className="text-black text-2xl md:text-3xl font-bold">
            Analytical Techniques
          </p>
          <p className="text-black text-base my-6 md:max-w-[80%]">
            At Chinar Minerals Geochemical services play a pivotal role in
            mining and mineral exploration by providing essential insights into
            the composition of geological materials. Through advanced analytical
            techniques, these services
          </p>
        </div>
        <div
          className="w-full flex flex-col md:flex-row gap-10 md:gap-4 xl:gap-10 lg:w-[60%] z-20"
          data-aos="fade-left"
        >
          <div className="flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl">
            <div className="relative w-full h-44">
              <Image
                src={gcServicesdata2[selectedIndex2].image1}
                alt="Image"
                fill
              />
            </div>
            <div className="w-full p-5">
              <p className="text-black text-lg font-semibold xl:my-4">
                {gcServicesdata2[selectedIndex2].heading1}
              </p>
              <p className="text-black text-base md:text-sm lg:text-base">
                {gcServicesdata2[selectedIndex2].text1}
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl">
            <div className="relative w-full h-44">
              <Image
                src={gcServicesdata2[selectedIndex2].image2}
                alt="Image"
                fill
              />
            </div>
            <div className="w-full p-5">
              <p className="text-black text-lg font-semibold xl:my-4">
                {gcServicesdata2[selectedIndex2].heading2}
              </p>
              <p className="text-black text-base md:text-sm lg:text-base">
                {gcServicesdata2[selectedIndex2].text2}
              </p>
            </div>
          </div>
          <div className="md:hidden flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl">
            <div className="relative w-full h-44">
              <Image src={gcServicesdata2[1].image1} alt="Image" fill />
            </div>
            <div className="w-full p-5">
              <p className="text-black text-lg font-semibold xl:my-4">
                {gcServicesdata2[1].heading1}
              </p>
              <p className="text-black text-base md:text-sm lg:text-base">
                {gcServicesdata2[1].text1}
              </p>
            </div>
          </div>
          <div className="md:hidden flex flex-col bg-[#f3f3f3] w-full shadow rounded-3xl">
            <div className="relative w-full h-44">
              <Image src={gcServicesdata2[1].image2} alt="Image" fill />
            </div>
            <div className="w-full p-5">
              <p className="text-black text-lg font-semibold xl:my-4">
                {gcServicesdata2[1].heading2}
              </p>
              <p className="text-black text-base md:text-sm lg:text-base">
                {gcServicesdata2[1].text2}
              </p>
            </div>
          </div>

          <div className="hidden md:flex md:flex-col justify-center gap-5 items-center">
            <Image
              src={AppImages.scrollLeftIcon}
              alt="Image"
              className="h-24 w-60"
              style={{ transform: "rotate(180deg)" }}
              onClick={() => {
                selectedIndex2 === 1
                  ? setSelectedIndex2(0)
                  : setSelectedIndex2(1);
              }}
            />
            <Image
              src={AppImages.scrollLeftIcon}
              alt="Image"
              className="h-24 w-60"
              onClick={() => {
                selectedIndex2 === 1
                  ? setSelectedIndex2(0)
                  : setSelectedIndex2(1);
              }}
            />
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
