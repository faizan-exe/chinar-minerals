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
    // Start the animation when the component mounts
    setStartAnimation(true);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative bg-center w-full h-[calc(100vh)] pt-44">
        <Image src={AppImages.backgroundImage} alt="Image" layout="fill" />
        <div className="absolute h-full w-full xl:px-36 lg:px-28">
          <p
            className={`font-semibold text-white leading-snug text-[2.5rem] xl:text-[3.75rem] lg:mt-5 xl:mt-10 transition-all duration-500 ease-in-out transform ${
              startAnimation ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            Innovating the <br /> Future of Mining
          </p>
          <div className="lg:max-w-[60%] max-w-[80%] lg:my-8 my-4">
            <p
              className={`text-lg xl:text-2xl text-white transition-all duration-600 ease-in-out transform ${
                startAnimation ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              Join us on a journey to revolutionize mining practices. Chinar
              Minerals is at the forefront of implementing cutting-edge
              technology and sustainable methods to reshape the global mining
              landscape.
            </p>
          </div>

          <div
            className={`flex gap-10 transition-all duration-700 ease-in-out transform ${
              startAnimation ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button className="bg-transparent text-white font-semibold border-white border-2 rounded-lg xl:w-64 lg:w-52 py-2 lg:py-3 xl:py-5 xl:text-2xl text-lg">
              Contact Us
            </button>
            <button className="bg-[#D7051D] text-white font-semibold rounded-lg xl:w-64 lg:w-52 lg:py-5 py-2 xl:text-2xl text-lg">
              Explore our World
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex lg:flex-row relative gap-10 mt-[-120px] z-10 justify-center">
        <div className="bg-white flex flex-col justify-center items-center xl:w-[20%] lg:w-[25%] h-60 shadow px-4">
          <Image src={AppImages.sustIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl font-medium mt-6 mb-2">
            Sustainability
          </p>
          <p className="text-black text-center text-sm font-normal px-5">
            These texts aim to encapsulate the ethos of Chinar Minerals
          </p>
        </div>

        <div className="bg-white flex flex-col justify-center items-center xl:w-[20%] lg:w-[25%] h-60 shadow px-4">
          <Image src={AppImages.sustIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl font-medium mt-6 mb-2">
            Sustainability
          </p>
          <p className="text-black text-center text-sm font-normal px-5">
            These texts aim to encapsulate the ethos of Chinar Minerals
          </p>
        </div>

        <div className="bg-white flex flex-col justify-center items-center xl:w-[20%] lg:w-[25%] h-60 shadow px-4">
          <Image src={AppImages.sustIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl font-medium mt-6 mb-2">
            Sustainability
          </p>
          <p className="text-black text-center text-sm font-normal px-5">
            These texts aim to encapsulate the ethos of Chinar Minerals
          </p>
        </div>
      </div>

      <div className="flex gap-10 my-[10%] px-[10%]">
        <div className=" w-[40%]">
          <div className="h-[calc(60vh)] relative">
            <Image
              src={AppImages.crainImage}
              alt="Icon"
              objectFit="contain"
              layout="fill"
            />
            <div className="bg-[#D7051D] absolute rotate-90 lg:bottom-[187px] lg:left-[-140px] xl:bottom-[168px] xl:left-[-200px] 2xl:left-[-140px] lg:py-5 lg:px-12 xl:py-8 xl:px-16">
              <p className="text-white lg:font-bold xl:font-extrabold lg:text-xl xl:text-3xl">
                25 Years Experience
              </p>
            </div>
            <div className="absolute bottom-[-50px] right-[-120px] bg-slate-950">
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
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-black font-extrabold lg:text-xl xl:text-3xl my-[2%]">
              We're finding better ways to provide the materials the world needs
            </p>
            <p className="text-black lg:text-md xl:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s
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
        <Image
          src={AppImages.goldBg}
          alt="Image"
          height={175}
          className="absolute left-0 top-5"
        />
        <Image
          src={AppImages.diamonds}
          alt="Image"
          height={120}
          className="absolute bottom-24 left-[35%]"
        />
        <div className="w-[50%]">
          <p className="text-black font-extrabold text-3xl my-10">
            Our Business
          </p>
          <p className="text-black font-extrabold text-2xl my-15">
            We're finding better ways to provide the materials the world needs
          </p>
          <p className="text-black text-lg my-[2%]">
            For 150 years we’ve been looking for new and better ways of doing
            things. You'll find our teams around the world working to reduce our
            carbon footprint, partnering to develop new technologies to
            decarbonise steel and aluminium production, and creating new
            products from waste
          </p>
          <button className="bg-[#D7051D] py-5 px-10 rounded-md my-20 text-white">
            View More
          </button>
        </div>
        <div className="w-[50%] flex flex-col gap-5 items-center justify-center">
          <div className="flex gap-5 w-full justify-center">
            <div className="relative">
              <Image
                src={AppImages.gold}
                alt="Image"
                height={200}
                width={200}
              />
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Gold</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
            <div className="relative">
              <Image
                src={AppImages.copper}
                alt="Image"
                height={195}
                width={195}
              />
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Copper</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-full justify-center">
            <div className="relative">
              <Image
                src={AppImages.copper}
                alt="Image"
                height={195}
                width={195}
              />
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Copper</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
            <div className="relative">
              <Image
                src={AppImages.gold}
                alt="Image"
                height={200}
                width={200}
              />
              <div className="flex items-baseline absolute bottom-5 left-5">
                <p className="font-bold text-white">Gold</p>
                <div className="h-[1px] w-[50px] border-2 border-white ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-center w-full h-[calc(70vh)] py-10">
        <Image src={AppImages.background2} alt="Image" layout="fill" />
        <div className="absolute h-full w-full xl:px-36 lg:px-24">
          <p className="text-[#D7051D] font-semibold my-[1%]">
            Lorem Ipsum is simply dummy
          </p>
          <div>
            <div className="flex items-baseline">
              <p className="font-bold text-white text-3xl">
                More About what we do
              </p>
              <div className="h-[1px] w-[80px] border-2 border-[#D7051D] ml-2" />
            </div>
          </div>
          <div className="flex lg:gap-6 xl:gap-10 justify-center mt-28">
            <div className="bgBlack relative flex flex-col justify-center items-start lg:w-[30%] xl:w-[25%] px-8 py-14">
              <div className="bg-[#D7051D] flex items-center justify-center p-5 absolute top-[-30px] left-8">
                <Image
                  src={AppImages.analysisIcon}
                  alt="Icon"
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-white text-xl font-bold mb-[3%]">
                Gold Analysis
              </p>
              <p className="text-white text-sm">
                For 150 years we’ve been looking for new and better ways of
                doing things. You'll find our teams around the world working to
                reduce our carbon footprint, partnering to develop new
                technologies.
              </p>
            </div>

            <div className="bgBlack relative flex flex-col justify-center items-start lg:w-[30%] xl:w-[25%] px-8 py-14">
              <div className="bg-[#D7051D] flex items-center justify-center p-5 absolute top-[-30px] left-8">
                <Image
                  src={AppImages.analysisIcon}
                  alt="Icon"
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-white text-xl font-bold mb-[3%]">
                Gold Analysis
              </p>
              <p className="text-white text-sm">
                For 150 years we’ve been looking for new and better ways of
                doing things. You'll find our teams around the world working to
                reduce our carbon footprint, partnering to develop new
                technologies.
              </p>
            </div>

            <div className="bgBlack relative flex flex-col justify-center items-start lg:w-[30%] xl:w-[25%] px-8 py-14">
              <div className="bg-[#D7051D] flex items-center justify-center p-5 absolute top-[-30px] left-8">
                <Image
                  src={AppImages.analysisIcon}
                  alt="Icon"
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-white text-xl font-bold mb-[3%]">
                Gold Analysis
              </p>
              <p className="text-white text-sm">
                For 150 years we’ve been looking for new and better ways of
                doing things. You'll find our teams around the world working to
                reduce our carbon footprint, partnering to develop new
                technologies.
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
