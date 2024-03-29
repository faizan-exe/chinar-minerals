import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface OurTeamComponentInterface {}

export default function OurTeamComponent(props: OurTeamComponentInterface) {
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
            Home {" > "} About Us {" > "}
            <span className="text-[#D7051D]">our Team</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Leadership
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Board of Directors
          </p>
        </div>
      </div>

      <div className="w-full px-[5%] lg:px-[6%] xl:px-[10%] mt-10 mb-20 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-6 xl:gap-8 ">
        <div
          className="w-full lg:w-[30%] flex items-center justify-center"
          data-aos="fade-right"
        >
          <Image
            src={AppImages.leadershipIcon}
            alt="Image"
            className="h-28 w-44 md:h-36 md:w-52 lg:h-44 lg:w-60"
          />
        </div>
        <div className="w-full lg:w-[70%]" data-aos="fade-left">
          <p className="text-black text-2xl md:text-2xl font-bold mb-5 text-center lg:text-left">
            Board of Directors
          </p>
          <p className="text-black text-sm lg:max-w-[90%] text-center lg:text-left">
            Our Board of Directors comprises a team of highly experienced and
            dedicated professionals who are committed to guiding Chinar Minerals
            Processing towards sustained growth and success. Each member brings
            a wealth of knowledge and expertise from various fields, including
            mineral processing, business management, finance, and environmental
            sustainability.
          </p>
        </div>
      </div>

      <div className="w-full px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-10 2xl:gap-14 flex-col">
        <div
          className="w-full flex justify-center flex-col md:flex-row gap-10"
          data-aos="fade-up"
        >
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden relative">
            <div className="basis-1/2">
              <Image src={AppImages.ourTeam1} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                LIAQAT ALI SULTAN
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-normal text-xl xl:text-2xl w-[90%]">
                  CEO Chinar Mineral Processing Mills
                </p>
                <div className="flex items-center justify-end w-[10%]">
                  <Link
                    href={"https://www.linkedin.com/in/liaqatsultan/"}
                    target="_blank"
                  >
                    <Image
                      src={AppImages.linkedInRed}
                      alt="Icon"
                      className="w-12 h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 pt-5 pb-14">
                As the Chief Executive Officer at Chinar Mineral Processing
                Mills, I lead a team of professionals who are dedicated to
                exploring and developing rare earth minerals (REMS) in Pakistan.
                With over 10 years of experience in the mineral processing
                industry.
              </p>
            </div>
            <Link
              href={"https://www.linkedin.com/in/liaqatsultan/"}
              target="_blank"
            >
              <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2 absolute bottom-0">
                <p className="text-white">Read More</p>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden relative">
            <div className="basis-1/2">
              <Image src={AppImages.eccChairman} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                Dr Mirza Shahid Baig
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-normal text-xl xl:text-2xl w-[90%]">
                  Chairmain ECC
                </p>
                <div className="flex items-center justify-end w-[10%]">
                  <Link
                    href={
                      "https://www.linkedin.com/in/mirza-shahid-baig-a83398b1/?originalSubdomain=pk"
                    }
                    target="_blank"
                  >
                    <Image
                      src={AppImages.linkedInRed}
                      alt="Icon"
                      className="w-12 h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 pt-5 pb-14">
                Experienced University Professor with a demonstrated history of
                working in the higher education industry. Skilled in ArcGIS,
                Tectonics, Structural Engineering, Biostratigraphy, and Earth
                Science. Strong education professional with a Doctor of
                Philosophy (Ph.D.) focused in Geology from Oregon State
                University.
              </p>
            </div>
            <Link
              href={
                "https://www.linkedin.com/in/mirza-shahid-baig-a83398b1/?originalSubdomain=pk"
              }
              target="_blank"
            >
              <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2 absolute bottom-0">
                <p className="text-white">Read More</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="w-full flex justify-center flex-col md:flex-row gap-10"
          data-aos="fade-up"
        >
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden relative">
            <div className="basis-1/2">
              <Image src={AppImages.svc} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                Dr. Muhammad Saleem
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-normal text-xl xl:text-2xl w-[90%]">
                  Senior Vice Chairman
                </p>
                <div className="flex items-center justify-end w-[10%]">
                  <Link
                    href={
                      "https://www.linkedin.com/in/muhammad-saleem-mughal-222197259/?originalSubdomain=pk"
                    }
                    target="_blank"
                  >
                    <Image
                      src={AppImages.linkedInRed}
                      alt="Icon"
                      className="w-12 h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 pt-5 pb-14">
                Assistant Professor of Geology at Institute of Geology,
                University of Azad Jammu and Kashmir, Muzaffarabad
              </p>
            </div>
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-saleem-mughal-222197259/?originalSubdomain=pk"
              }
              target="_blank"
            >
              <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2 absolute bottom-0">
                <p className="text-white">Read More</p>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden relative">
            <div className="basis-1/2">
              <Image src={AppImages.vc} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                Dr. Amir Shahzad
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-normal text-xl xl:text-2xl w-[90%]">
                  Vice Chairman
                </p>
                <div className="flex items-center justify-end w-[10%]">
                  <Link
                    href={"https://www.researchgate.net/profile/Amir-Shahzad-7"}
                    target="_blank"
                  >
                    <Image
                      src={AppImages.linkedInRed}
                      alt="Icon"
                      className="w-12 h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 pt-5 pb-14">
                Expertise in Sedimentology, Geology, Sedimentary Basins,
                Sequence Stratigraphy, Basin Analysis, Plate Tectonics,
                Geochronology, Petrographic Thin Section, Economic Geology,
                Palaeoecolo
              </p>
            </div>
            <Link
              href={"https://www.researchgate.net/profile/Amir-Shahzad-7"}
              target="_blank"
            >
              <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2 absolute bottom-0">
                <p className="text-white">Read More</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="w-full flex justify-center flex-col md:flex-row gap-10"
          data-aos="fade-up"
        >
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden">
            <div className="basis-1/2">
              <Image src={AppImages.founder} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                Syed Nohman Gilani
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-normal text-xl xl:text-2xl w-[90%]">
                  Chief Geologist CGC & founder of EEC Exploration Geologist
                </p>
                <div className="flex items-center justify-end w-[10%]">
                  <Link
                    href={
                      "https://www.linkedin.com/in/syed-nohman-gilani-260b20246/"
                    }
                    target="_blank"
                  >
                    <Image
                      src={AppImages.linkedInRed}
                      alt="Icon"
                      className="w-12 h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 py-5">
                Chinar mines and minerals and Earth explorer club is a
                subsidiary of Chinar group of companies, engaged in exploration
                of different domains of mine and minerals. We're working on
                dimension stones, metals and gemstone mining. We provide
                definite geological services by applying geological parameters
                for the fruitful exploration of economic deposits.
              </p>
            </div>
            <Link
              href={"https://www.linkedin.com/in/syed-nohman-gilani-260b20246/"}
              target="_blank"
            >
              <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2">
                <p className="text-white">Read More</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
