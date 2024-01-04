import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface GraniteComponentInterface {}

export default function GraniteComponent(props: GraniteComponentInterface) {
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
            Home {" > "} Products {" > "}
            <span className="text-[#D7051D]">Granite Quarry</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Granite Quarry
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Welcome to Granite Quarry by Chinar Minerals
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 px-[5%] lg:px-[8%] xl:px-[15%] my-16">
        <Image
          src={AppImages.phosphate1}
          alt="Image"
          height={300}
          data-aos="fade-right"
        />
        <div
          className="w-[295px] h-0 md:w-0 md:h-[270px] border-[#D7051D] border-2"
          data-aos="fade"
        />
        <p className="text-black text-lg md:text-2xl" data-aos="fade-left">
          At Granite Quarry, a proud subsidiary of Chinar Minerals Processing
          Mills, we specialize in the art of extracting, cutting, and polishing
          the world's most sought-after stones. Located in the scenic Kagali
          Village of Oghi Mansehra District, our quarry is not just a site, but
          the birthplace of exquisite natural stone products that are as unique
          as they are beautiful.
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

      <div className="relative h-[calc(150vh)] md:h-[calc(80vh)]">
        <Image
          src={AppImages.productsHeroBackground}
          alt="Image"
          className="w-full h-full absolute md:block hidden"
        />
        <Image
          src={AppImages.productsHeroBackgroundMob}
          alt="Image"
          className="w-full h-full absolute block md:hidden"
        />
        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0"></div>
        <Image
          src={AppImages.crainPNG}
          alt="Image"
          className="absolute right-[-65px] top-[-60px] h-[110%] 2xl:h-[100%] w-auto z-20 hidden 2xl:block"
        />
        <div className="absolute top-0 left-0 xl:px-32 lg:px-24 px-8 z-30 py-10 lg:py-16">
          <div className="flex items-baseline" data-aos="fade-right">
            <p className="font-bold text-white text-3xl">Products of Granite</p>
            <div className="h-[1px] w-[80px] border-2 border-[#D7051D] ml-2" />
          </div>

          <div
            className=" flex flex-col md:flex-row gap-6 md:h-[50%] my-10 md:my-16"
            data-aos="fade-left"
          >
            <div className="flex flex-col bg-[#f3f3f3] justify-center items-start lg:w-[30%] h-auto shadow opacity-100 md:opacity-70 hover:opacity-100 hover:scale-105">
              <div className="relative w-full h-40 md:h-72">
                <Image
                  src={AppImages.granite1}
                  alt="Icon"
                  layout="fill"
                  className="absoltue"
                />
              </div>
              <div className="w-full p-5">
                <p className="font-bold text-[#D7051D]">Custom Designs</p>
                <p className="text-black text-sm my-3">
                  Tailored to your specification for a personal touch.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-[#f3f3f3] justify-center items-start lg:w-[30%] h-auto shadow opacity-100 md:opacity-70 hover:opacity-100 hover:scale-105">
              <div className="relative w-full h-40 md:h-72">
                <Image
                  src={AppImages.granite3}
                  alt="Icon"
                  layout="fill"
                  className="absoltue"
                />
              </div>
              <div className="w-full p-5">
                <p className="font-bold text-[#D7051D]">Classic Granite</p>
                <p className="text-black text-sm my-3">
                  Timeless elegance for interiors and exteriors.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-[#f3f3f3] justify-center items-start lg:w-[30%] h-auto shadow opacity-100 md:opacity-70 hover:opacity-100 hover:scale-105">
              <div className="relative w-full h-40 md:h-72">
                <Image
                  src={AppImages.granite2}
                  alt="Icon"
                  layout="fill"
                  className="absoltue"
                />
              </div>
              <div className="w-full p-5">
                <p className="font-bold text-[#D7051D]">Exotic Patterns</p>
                <p className="text-black text-sm my-3">
                  Timeless elegance for interiors and exteriors.
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

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] mb-20 flex">
        <div className="relative w-0 lg:w-[50%]" data-aos="fade-right">
          <div className="bg-[#f7cdd2] relative lg:h-[calc(60vh)] w-[calc(40vw)]">
            <Image
              src={AppImages.product2}
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
              Granite?
            </p>
          </div>
          <div className="mt-5 lg:ml-10 lg:max-w-[60%]">
            <p className="2xl:text-lg lg:text-base text-sm text-black 2xl:leading-normal xl:mt-10">
              Chinar Minerals mines granite due to its durability, aesthetic
              appeal, and high market demand. By providing a robust and
              beautiful material ideal for various construction and design
              applications, the company meets the needs of a diverse clientele
              while committing to responsible and sustainable mining practices.
            </p>
            <button className="bg-[#D7051D] py-3 px-5 text-white rounded-md xl:my-10 my-5">
              Get a Qoute
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
