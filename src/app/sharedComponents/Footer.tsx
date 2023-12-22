"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppImages } from "../utils/AppImages";

interface FooterComponentInterface {}

export default function Footer(props: FooterComponentInterface) {
  return (
    <div className="relative bg-center w-full h-[calc(70vh)]">
      <Image src={AppImages.footerBg} alt="Image" layout="fill" />
      <div className="absolute h-full w-full px-[10%] flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4 w-[25%]">
            <Link href={"/pages/home"} className="mb-5">
              <Image
                src={AppImages.logoTransparent}
                alt="Logo"
                width={150}
                height={100}
              />
            </Link>
            <p className="font-semibold text-white mb-5">
              Chinar Mineral Prcessing Mills
            </p>
            <p className="text-xs text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="flex justify-start items-center gap-3">
              <Image src={AppImages.youtube} alt="Icon" height={20} />
              <Image src={AppImages.twitter} alt="Icon" height={20} />
              <Image src={AppImages.instagram} alt="Icon" height={20} />
              <Image
                src={AppImages.facebook}
                alt="Icon"
                height={22}
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[35%]">
            <p className="font-semibold text-sm text-white mb-3">Quick Links</p>
            <p className=" text-sm text-[#a7a6a6]">Services</p>
            <p className="text-sm text-[#a7a6a6]">Products</p>
            <p className="text-sm text-[#a7a6a6]">About Us</p>
            <p className="text-sm text-[#a7a6a6]">Contact Us</p>
          </div>
          <div className="flex flex-col gap-5 justify-end w-[20%]">
            <p className="text-lg text-white">
              123 Market St. #22B Charlottesville, California 44635
            </p>
            <p className="text-sm text-white">(434) 546-4356</p>
            <p className="text-sm text-white">contact@lift.agency</p>
          </div>
        </div>

        <div className="w-full h-0 border border-[#a7a6a6] my-8" />

        <div className="w-full flex justify-center items-center text-[#a7a6a6]">
          <p>© 2020 shaheen . All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
