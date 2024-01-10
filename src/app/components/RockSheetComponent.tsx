import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface RockSheetComponentInterface {}

export default function RockSheetComponent(props: RockSheetComponentInterface) {
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
            Home {" > "} Products {" > "}
            <span className="text-[#D7051D]">RockSheet</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Chinar Rocksheet
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Welcome to Chinar Rocksheet by Chinar Minerals.
          </p>
        </div>
      </div>

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-6 xl:gap-10 2xl:gap-16 flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] lg:mb-[80px]" data-aos="fade-right">
          <div className="lg:max-w-[85%] 2xl:max-w-[80%] lg:mt-3 2xl:mt-5">
            <p className="text-black font-bold text-xl xl:text-2xl">
              ABOUT CHINAR ROCKSHEET
            </p>
            <p className="xl:text-lg lg:text-base text-sm text-black leading-loose mt-3 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-14">
              ROCKSHEET is a stone sheet made of natural stone veneer,Sandstone
              and Marble. Sliced thin using a patented process, Stone sheet
              thickness up to 2mm*. Infused with a fiberglass backing, providing
              extra strength. An innovative product by Chinar group of
              Companies, a leading brand in mine and minerals. Since its
              invention ROCKSHEET has been an inspiration in the wall cladding
              business globally. The ease of application, the choice of extra
              ordinary colors and above all the resilient durability has made
              the product an instant success in architect industry.This opens up
              endless opportunities to create the rocksheet of natural stone on
              drywalls, wood, metal, fiberglass, ceramic and concrete.
            </p>
          </div>
        </div>
        <div
          className="relative w-full lg:w-[50%] flex justify-center"
          data-aos="fade-left"
        >
          <div className="bg-[#f7cdd2] relative h-[calc(60vh)] lg:h-[calc(50vh)] xl:h-[calc(60vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]">
            <Image
              src={AppImages.rs1}
              alt="Image"
              className="absolute left-[-30px] bottom-[-30px] h-[calc(60vh)] lg:h-[calc(50vh)] xl:h-[calc(60vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]"
            />
            <div className="absolute bg-black opacity-40 w-full h-full left-[-30px] bottom-[-30px]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 px-[5%] lg:px-[8%] xl:px-[15%] my-16">
        <Image
          src={AppImages.rs2}
          alt="Image"
          height={300}
          data-aos="fade-right"
        />
        <div
          className="w-[295px] h-0 md:w-0 md:h-[270px] border-[#D7051D] border-2"
          data-aos="fade"
        />
        <p className="text-black text-lg md:text-2xl" data-aos="fade-left">
          ROCKSHEET is a stone sheet made of natural stone veneer,Sandstone and
          Marble. Sliced thin using a patented process, Stone sheet thickness up
          to 2mm*. Infused with a fiberglass backing, providing extra strength.
          An innovative product by Chinar group of Companies, a leading brand in
          mine and minerals
        </p>
      </div>

      <div
        className="px-[5%] lg:px-[8%] xl:px-[15%] mt-5 my-16"
        data-aos="fade-down"
      >
        <p className="text-black text-xl font-semibold mb-6 mt-12">
          Our Expertise
        </p>
        <p className="text-black text-base leading-10 my-4">
          <span className="font-bold">Extraction Excellence:</span> In the heart
          of nature, we carefully select and extract premium quality granite.
          Our methods are a blend of traditional wisdom and modern technology,
          ensuring the integrity and quality of each stone.
        </p>
        <p className="text-black text-base leading-10 my-4">
          <span className="font-bold">Precision Cutting & Polishing: </span> Our
          state-of-the-art facility in Hattar, Haripur is where magic happens.
          With advanced machinery and skilled artisans, we transform raw stones
          into polished masterpieces, each reflecting a story of millions of
          years.
        </p>
      </div>

      <div className="relative h-[calc(195vh)] md:h-[calc(80vh)]">
        <Image
          src={AppImages.rsBg2}
          alt="Image"
          className="w-full h-full absolute md:block hidden"
        />
        <Image
          src={AppImages.rsBg2Mob}
          alt="Image"
          className="w-full h-full absolute block md:hidden"
        />
        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0"></div>
        <div className="xl:px-40 lg:px-24 px-8 z-30 py-10 lg:py-20">
          <div className="flex items-baseline" data-aos="fade-right">
            <p className="font-bold text-white text-3xl xl:text-5xl">
              Why Choose Rocksheet
            </p>
            <div className="h-[1px] w-[80px] border-2 border-[#D7051D] ml-2" />
          </div>

          <div
            className=" flex flex-col md:flex-row gap-6 xl:gap-8 md:h-[50%] my-10 md:my-16"
            data-aos="fade-left"
          >
            <div className="flex flex-col bg-[#f3f3f3] lg:w-[30%] h-auto shadow opacity-100 md:opacity-80 hover:opacity-100 hover:scale-105 rounded-3xl">
              <div className="relative w-full h-40 md:h-72">
                <Image
                  src={AppImages.rs4}
                  alt="Icon"
                  layout="fill"
                  className="absoltue"
                />
              </div>
              <div className="w-full p-5">
                <p className="font-bold text-[#D7051D]">Translucent</p>
                <p className="text-black text-sm my-3">
                  Allows for creative lighting and flexible design.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-[#f3f3f3] lg:w-[30%] h-auto shadow opacity-100 md:opacity-80 hover:opacity-100 hover:scale-105 rounded-3xl">
              <div className="relative w-full h-40 md:h-72">
                <Image
                  src={AppImages.rs5}
                  alt="Icon"
                  layout="fill"
                  className="absoltue"
                />
              </div>
              <div className="w-full p-5">
                <p className="font-bold text-[#D7051D]">Extreme Durability</p>
                <p className="text-black text-sm my-3">
                  Withstands wear and tear over extended periods.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-[#f3f3f3]  lg:w-[30%] h-auto shadow opacity-100 md:opacity-80 hover:opacity-100 hover:scale-105 rounded-3xl">
              <div className="relative w-full h-40 md:h-72">
                <Image
                  src={AppImages.rs6}
                  alt="Icon"
                  layout="fill"
                  className="absoltue"
                />
              </div>
              <div className="w-full p-5">
                <p className="font-bold text-[#D7051D]">
                  Provides Heat Proofing
                </p>
                <p className="text-black text-sm my-3">
                  Enhances thermal insulation for comfortable interiors.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-[#f3f3f3]  lg:w-[30%] h-auto shadow opacity-100 md:opacity-80 hover:opacity-100 hover:scale-105 rounded-3xl">
              <div className="relative w-full h-40 md:h-72">
                <Image
                  src={AppImages.rs7}
                  alt="Icon"
                  layout="fill"
                  className="absoltue"
                />
              </div>
              <div className="w-full p-5">
                <p className="font-bold text-[#D7051D]">Structural Stability</p>
                <p className="text-black text-sm my-3">
                  Offers robust support and longevity to structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="px-[5%] lg:px-[8%] xl:px-[15%] my-16"
        data-aos="fade-down"
      >
        <p className="text-black text-xl font-semibold mb-6 mt-12">
          Our Commitment
        </p>
        <p className="text-black text-base leading-10 my-4">
          At Granite Quarry, quality is not just a promise but a practice. We
          adhere to strict standards and conduct thorough inspections to ensure
          each product meets our high-quality benchmarks.
        </p>
        <p className="text-black text-xl font-semibold mb-6 mt-12">Join Us</p>
        <p className="text-black text-base leading-10 my-4">
          Discover the beauty and versatility of granite with Chinar Minerals'
          Granite Quarry. Whether you are an architect, a builder, or a
          homeowner, we are here to provide you with the best natural stone
          solutions. Contact us today to start your journey with us, and let's
          create something beautiful together!
        </p>
      </div>

      <div
        className="relative w-full lg:hidden flex justify-center mb-16"
        data-aos="fade-right"
      >
        <div className="bg-[#f7cdd2] relative h-[calc(50vh)] lg:h-[calc(60vh)] xl:h-[calc(70vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]">
          <Image
            src={AppImages.rs3}
            alt="Image"
            className="absolute right-[-30px] bottom-[-30px] h-[calc(50vh)] lg:h-[calc(60vh)] xl:h-[calc(70vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]"
          />
          <div className="absolute bg-black opacity-40 w-full h-full right-[-30px] bottom-[-30px]"></div>
        </div>
      </div>

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] mb-20 flex">
        <div className="relative w-0 lg:w-[50%]" data-aos="fade-right">
          <div className="bg-[#f7cdd2] relative lg:h-[calc(60vh)] w-[calc(40vw)]">
            <Image
              src={AppImages.rs3}
              alt="Image"
              className="absolute right-[-30px] bottom-[-30px] lg:h-[calc(60vh)] w-[calc(40vw)] hidden lg:block"
            />
            <div className="absolute bg-black opacity-40 w-full h-full right-[-30px] bottom-[-30px]"></div>
          </div>
          <div className="absolute hidden lg:flex top-[80px] lg:right-5 xl:right-[-27px]">
            <p className="text-white 2xl:text-5xl text-3xl font-semibold">
              Why does
            </p>
          </div>
        </div>
        <div
          className="w-[100%] lg:w-[50%] lg:mt-[80px] lg:ml-[0px] xl:ml-[40px]"
          data-aos="fade-left"
        >
          <div>
            <p className="text-black 2xl:text-5xl text-3xl font-semibold block lg:hidden">
              Why does
            </p>
            <p className="text-black 2xl:text-5xl text-3xl font-semibold mb-2">
              Chinar Mine
            </p>
            <p className="text-[#D7051D] 2xl:text-5xl text-3xl font-semibold">
              Rocksheet?
            </p>
          </div>
          <div className="mt-5 lg:ml-10 lg:max-w-[60%]">
            <p className="2xl:text-lg lg:text-base text-sm text-black 2xl:leading-normal xl:mt-10">
              Chinar Minerals mines RockSheet to provide a sustainable and
              versatile building material that meets modern architectural
              demands while aligning with the company's commitment to innovation
              and eco-friendly practices.
            </p>
            <Link href={"/pages/getAQoute"}>
              <button className="bg-[#D7051D] py-3 px-5 text-white rounded-md xl:my-10 my-5">
                Get a Qoute
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
