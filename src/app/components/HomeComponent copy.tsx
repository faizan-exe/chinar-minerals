"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import { AppImages } from "../utils/AppImages";

interface HomeComponentInterface {}

export default function HomeComponent(props: HomeComponentInterface) {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative bg-center w-full h-[calc(70vh)] lg:h-[calc(100vh)] lg:pt-32 xl:pt-36 2xl:pt-44">
        <Image src={AppImages.backgroundImage} alt="Image" layout="fill" />
        <div className="absolute h-full w-full xl:px-[10%] lg:px-28">
          <p
            className={`font-semibold text-white sm:leading-snug md:leading-snug lg:leading-tight xl:leading-snug sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3.75rem] lg:mt-5 xl:mt-10 transition-all duration-500 ease-in-out transform ${
              startAnimation ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            Revolutionizing <br /> Mineral Excellence
          </p>
          <div
            className={`max-w-[80%] lg:max-w-[70%] 2xl:max-w-[60%] 2xl:my-10 xl:my-7 lg:my-5 my-3 transition-all duration-500 ease-in-out transform ${
              startAnimation ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <p className={`lg:text-sm xl:text-md 2xl:text-lg text-white`}>
              Embark on a transformative journey with us. Chinar Minerals leads
              the charge in adopting advanced technology and eco-friendly
              practices, redefining the mining industry and setting new
              benchmarks for a sustainable future.
            </p>
          </div>

          <div
            className={`flex gap-10 transition-all duration-700 ease-in-out transform ${
              startAnimation ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button className="bg-transparent text-white font-semibold rounded-lg border-white border-2 2xl:w-64 xl:w-56 lg:w-44 2xl:py-5 xl:py-3 lg:py-2 py-1 2xl:text-2xl xl:text-xl text-lg">
              Contact Us
            </button>
            <button className="bg-[#D7051D] text-white font-semibold rounded-lg 2xl:w-64 xl:w-56 lg:w-44 2xl:py-5 xl:py-3 lg:py-2 py-1 2xl:text-2xl xl:text-xl text-lg">
              Explore our World
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row relative gap-10 mt-[-120px] z-10 justify-center">
        <div className="bg-white flex flex-col justify-center items-center xl:w-[20%] lg:w-[22%] h-60 shadow px-4">
          <Image src={AppImages.sustIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl font-medium mt-6 mb-2">
            Sustainability
          </p>
          <p className="text-black text-center text-sm font-normal px-5">
            Eco-Conscious Sourcing and Production
          </p>
        </div>

        <div className="bg-white flex flex-col justify-center items-center xl:w-[20%] lg:w-[22%] h-60 shadow px-4">
          <Image src={AppImages.innovIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl font-medium mt-6 mb-2">Innovation</p>
          <p className="text-black text-center text-sm font-normal px-5">
            Leading with Advanced Mineral Grinding Technology
          </p>
        </div>

        <div className="bg-white flex flex-col justify-center items-center xl:w-[20%] lg:w-[22%] h-60 shadow px-4">
          <Image src={AppImages.qualIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl font-medium mt-6 mb-2">Quality</p>
          <p className="text-black text-center text-sm font-normal px-5">
            Commitment to Excellence in Manufacturing
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 my-[10%] px-[10%]">
        <div className="w-full lg:w-[40%]">
          <div className="h-[calc(100vh)] lg:h-[calc(60vh)] relative">
            <Image src={AppImages.home1} alt="Icon" fill />
            <div className="absolute lg:bottom-[-50px] lg:right-[-120px] bg-slate-950">
              <Image
                src={AppImages.videoThumbnail}
                alt="Icon"
                className="opacity-80 h-[calc(25vh)] w-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="h-[75%]">
            <p className="text-[#D7051D] font-extrabold lg:text-lg mb-[2%]">
              Empowering Progress, One Mineral at a Time
            </p>
            <p className="text-black font-extrabold lg:text-xl xl:text-3xl my-[2%]">
              We're finding better ways to provide the materials the world needs
            </p>
            <p className="text-black lg:text-md xl:text-lg">
              At Chinar Minerals Processing Mills, we're dedicated to finding
              better ways to provide the essential materials the world needs.
              With a focus on innovation and quality, we harness cutting-edge
              technology to process micro powders and fillers from Calcium
              Carbonate, Chalk, and Talc.
            </p>
          </div>
          <div className="h-[25%] flex justify-center lg:gap-5 xl:gap-10">
            <div>
              <p className="text-black font-extrabold lg:text-xl xl:text-3xl my-[2%]">
                Shaheen
              </p>
              <p className="text-black lg:text-xl xl:text-3xl my-[2%]">CEO</p>
            </div>
            <div className="h-[60%] w-0 border-2 border-black"></div>
            <div>
              <Image
                src={AppImages.signature}
                alt="Signature"
                className="lg:h-[40%] xl:h-[60%] w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full flex px-[10%] py-[5%] relative">
        <div className="w-[50%]">
          <p className="text-black font-extrabold text-3xl my-10">
            Our Business
          </p>
          <p className="text-black font-extrabold text-2xl my-15">
            Innovative Solutions for Today’s Challenges
          </p>
          <p className="text-black text-lg my-[2%]">
            For over a decade, we've dedicated ourselves to not just meeting the
            industry's needs but to exceed them. Our teams globally are actively
            engaged in reducing our carbon footprint, collaborating on new
            technologies to decarbonize production processes, and innovating to
            create valuable products from waste materials.
          </p>
          <button className="bg-[#D7051D] py-5 px-10 rounded-md my-20 text-white">
            View More
          </button>
        </div>
        <div className="w-[50%] flex flex-col gap-5 items-center justify-center">
          <div className="flex gap-5 w-full justify-center">
            <div className="relative">
              <Image
                src={AppImages.goldHome}
                alt="Image"
                height={200}
                width={200}
                className="rounded-lg"
              />
              <div className="absolute bg-black opacity-40 w-full h-full top-0 left-0 rounded-lg"></div>
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Gold</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
            <div className="relative">
              <Image
                src={AppImages.copperHome}
                alt="Image"
                height={200}
                width={200}
                className="rounded-lg"
              />
              <div className="absolute bg-black opacity-40 w-full h-full top-0 left-0 rounded-lg"></div>
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Copper</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-full justify-center">
            <div className="relative">
              <Image
                src={AppImages.rocksheetHome}
                alt="Image"
                height={200}
                width={200}
                className="rounded-lg"
              />
              <div className="absolute bg-black opacity-40 w-full h-full top-0 left-0 rounded-lg"></div>
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Rocksheet</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
            <div className="relative">
              <Image
                src={AppImages.graniteHome}
                alt="Image"
                height={200}
                width={200}
                className="rounded-lg"
              />
              <div className="absolute bg-black opacity-40 w-full h-full top-0 left-0 rounded-lg"></div>
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Granite</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-center w-full lg:h-[calc(85vh)] 2xl:h-[calc(70vh)] py-10">
        <Image src={AppImages.background2} alt="Image" layout="fill" />
        <div className="absolute h-full w-full xl:px-36 lg:px-24">
          <p className="text-[#D7051D] font-semibold my-[1%]">
            Quality, Innovation, & Customer Service.
          </p>
          <div>
            <div className="flex items-baseline">
              <p className="font-bold text-white text-3xl">
                More About what we do
              </p>
              <div className="h-[1px] w-[80px] border-2 border-[#D7051D] ml-2" />
            </div>
          </div>

          <div className="flex lg:gap-6 xl:gap-10 justify-center xl:mt-20 2xl:mt-28">
            <div className="bgBlack relative flex flex-col items-start lg:w-[30%] xl:w-[25%] lg:px-8 2xl:px-5 lg:pt-10 2xl:py-20">
              <div className="bg-[#D7051D] flex items-center justify-center lg:p-3 xl:p-4 2xl:p-5 absolute top-[-30px] left-8">
                <Image
                  src={AppImages.analysisIcon}
                  alt="Icon"
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-white text-xl font-bold mb-3">
                Extraction and Processing
              </p>
              <p className="text-white text-sm">
                We extract premium quality stones and minerals from our site in
                Village Kagali, Oghi Mansehra District. Our meticulous selection
                process ensures only the finest materials are used.
              </p>
            </div>

            <div className="bgBlack relative flex flex-col items-start lg:w-[30%] xl:w-[25%] lg:px-8 2xl:px-5 lg:py-10 2xl:py-20">
              <div className="bg-[#D7051D] flex items-center justify-center lg:p-3 xl:p-4 2xl:p-5 absolute top-[-30px] left-8">
                <Image
                  src={AppImages.analysisIcon}
                  alt="Icon"
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-white text-xl font-bold mb-3">
                Product Innovation
              </p>
              <p className="text-white text-sm">
                Our commitment to innovation extends to creating custom
                solutions for our clients. We continuously develop new designs
                and concepts, ensuring that our clients have access to the most
                advanced and effective products available.
              </p>
            </div>

            <div className="bgBlack relative flex flex-col items-start lg:w-[30%] xl:w-[25%] lg:px-8 2xl:px-5 lg:py-10 2xl:py-20">
              <div className="bg-[#D7051D] flex items-center justify-center lg:p-3 xl:p-4 2xl:p-5 absolute top-[-30px] left-8">
                <Image
                  src={AppImages.analysisIcon}
                  alt="Icon"
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-white text-xl font-bold mb-3">Consultation</p>
              <p className="text-white text-sm">
                We provide comprehensive consultation services, engaging with
                clients, architects, and builders to ensure the best material
                selection for each unique project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 bg-white xl:px-36 lg:px-24">
        <p className="text-[#D7051D] font-semibold my-[1%]">
          Lorem Ipsum is simply dummy
        </p>
        <div className="flex items-baseline">
          <p className="font-bold text-black text-3xl">Our Recent Blogs</p>
          <div className="h-[1px] w-[80px] border-2 border-[#D7051D] ml-2" />
        </div>

        <div className="flex lg:gap-8 xl:gap-10 justify-center mt-28 mb-20">
          <div className="flex flex-col bg-[#f3f3f3] justify-center items-start lg:w-[30%] xl:w-[25%] h-auto shadow">
            <div className="relative w-full h-72">
              <Image
                src={AppImages.blogImage}
                alt="Icon"
                layout="fill"
                className="absoltue"
              />
              <div className="absolute top-5 right-5 bg-[#D7051D] h-16 w-16 flex flex-col items-center justify-center">
                <p className="font-medium text-white">04</p>
                <p className="font-medium text-white">Sep</p>
              </div>
            </div>
            <div className="w-full p-5">
              <div className="flex justify-between items-center w-full my-2">
                <p className="text-[#757474]">By: Carlson</p>
                <div className="flex gap-2">
                  <Image src={AppImages.commentIcon} alt="Icon" height={20} />
                  <p className="text-[#757474]">34</p>
                </div>
              </div>
              <p className="text-black text-xl font-semibold my-2">
                Chinar Resort Speciality
              </p>
              <p className="text-black text-sm my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="text-[#D7051D] my-2 font-medium underline">
                Read More...
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-[#f3f3f3] justify-center items-start lg:w-[30%] xl:w-[25%] h-auto shadow">
            <div className="relative w-full h-72">
              <Image
                src={AppImages.blogImage}
                alt="Icon"
                layout="fill"
                className="absoltue"
              />
              <div className="absolute top-5 right-5 bg-[#D7051D] h-16 w-16 flex flex-col items-center justify-center">
                <p className="font-medium text-white">04</p>
                <p className="font-medium text-white">Sep</p>
              </div>
            </div>
            <div className="w-full p-5">
              <div className="flex justify-between items-center w-full my-2">
                <p className="text-[#757474]">By: Carlson</p>
                <div className="flex gap-2">
                  <Image src={AppImages.commentIcon} alt="Icon" height={20} />
                  <p className="text-[#757474]">34</p>
                </div>
              </div>
              <p className="text-black text-xl font-semibold my-2">
                Chinar Resort Speciality
              </p>
              <p className="text-black text-sm my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="text-[#D7051D] my-2 font-medium underline">
                Read More...
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-[#f3f3f3] justify-center items-start lg:w-[30%] xl:w-[25%] h-auto shadow">
            <div className="relative w-full h-72">
              <Image
                src={AppImages.blogImage}
                alt="Icon"
                layout="fill"
                className="absoltue"
              />
              <div className="absolute top-5 right-5 bg-[#D7051D] h-16 w-16 flex flex-col items-center justify-center">
                <p className="font-medium text-white">04</p>
                <p className="font-medium text-white">Sep</p>
              </div>
            </div>
            <div className="w-full p-5">
              <div className="flex justify-between items-center w-full my-2">
                <p className="text-[#757474]">By: Carlson</p>
                <div className="flex gap-2">
                  <Image src={AppImages.commentIcon} alt="Icon" height={20} />
                  <p className="text-[#757474]">34</p>
                </div>
              </div>
              <p className="text-black text-xl font-semibold my-2">
                Chinar Resort Speciality
              </p>
              <p className="text-black text-sm my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="text-[#D7051D] my-2 font-medium underline">
                Read More...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full flex justify-between items-center px-[10%] py-[5%]">
        <div>
          <p className="text-[#D7051D] font-bold text-2xl">
            Committed to Excellence
          </p>
          <p className="text-black">
            We are committed to keeping our people healthy and safe
          </p>
        </div>
        <div>
          <button className="bg-[#D7051D] font-bold text-xl text-white p-5 rounded-md">
            How We work
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
