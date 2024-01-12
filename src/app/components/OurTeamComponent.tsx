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

      <div className="w-full px-[5%] lg:px-[6%] xl:px-[10%] mt-10 mb-20 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10">
        <div className="w-full lg:w-[30%] flex items-center justify-center">
          <Image
            src={AppImages.leadershipIcon}
            alt="Image"
            className="h-28 w-44 md:h-36 md:w-52 lg:h-48 lg:w-60"
          />
        </div>
        <div className="w-full lg:w-[70%]">
          <p className="text-black text-2xl md:text-2xl font-bold mb-5 text-center lg:text-left">
            Board of Directors
          </p>
          <p className="text-black text-sm lg:max-w-[90%] text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="w-full px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-10 2xl:gap-14 flex-col">
        <div className="w-full flex justify-center flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden">
            <div className="basis-1/2">
              <Image src={AppImages.ourTeam1} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                LIAQAT ALI SULTAN
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-semibold text-2xl">CEO</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={AppImages.linkedInRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.twitterRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.facebookRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.instagramRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2">
              <p>Read More</p>
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden">
            <div className="basis-1/2">
              <Image src={AppImages.ourTeam1} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                LIAQAT ALI SULTAN
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-semibold text-2xl">CEO</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={AppImages.linkedInRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.twitterRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.facebookRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.instagramRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2">
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden">
            <div className="basis-1/2">
              <Image src={AppImages.ourTeam1} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                LIAQAT ALI SULTAN
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-semibold text-2xl">CEO</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={AppImages.linkedInRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.twitterRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.facebookRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.instagramRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2">
              <p>Read More</p>
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden">
            <div className="basis-1/2">
              <Image src={AppImages.ourTeam1} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                LIAQAT ALI SULTAN
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-semibold text-2xl">CEO</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={AppImages.linkedInRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.twitterRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.facebookRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.instagramRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2">
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden">
            <div className="basis-1/2">
              <Image src={AppImages.ourTeam1} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                LIAQAT ALI SULTAN
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-semibold text-2xl">CEO</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={AppImages.linkedInRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.twitterRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.facebookRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.instagramRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2">
              <p>Read More</p>
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[40%] shadow rounded-lg overflow-hidden">
            <div className="basis-1/2">
              <Image src={AppImages.ourTeam1} alt="Image" />
            </div>
            <div className="basis-1/2">
              <p className="text-black font-bold text-2xl lg:text-3xl my-3 px-9">
                LIAQAT ALI SULTAN
              </p>
              <div className="flex justify-between my-3 px-9">
                <p className="text-black font-semibold text-2xl">CEO</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={AppImages.linkedInRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.twitterRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.facebookRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                  <Image
                    src={AppImages.instagramRed}
                    alt="Icon"
                    height={25}
                    width={25}
                  />
                </div>
              </div>
              <div className="h-0 w-full border-2 border-[#D7051D] my-2" />
              <p className="text-black text-base px-9 py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#D7051D] cursor-pointer w-full px-9 py-2">
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
