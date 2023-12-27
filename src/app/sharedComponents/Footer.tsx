"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppImages } from "../utils/AppImages";

interface FooterComponentInterface {}

export default function Footer(props: FooterComponentInterface) {
  return (
    <div className="relative bg-center w-full h-[calc(90vh)] lg:h-[calc(70vh)]">
      <Image src={AppImages.footerBg} alt="Image" layout="fill" />
      <div className="absolute h-full w-full flex flex-col">
        <div className="flex flex-col md:flex-row px-[5%] md:px-[8%] h-full items-center mb-32">
          <div className="flex md:w-[75%] gap-4 md:gap-0 mt-4 md:mt-0">
            <div className="flex flex-col w-[60%] md:w-[45%]">
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
              <div className="max-w-[200px]">
                <p className="text-xs text-white mb-5">
                  Chinar Minerals: Your source for premium Calcium Carbonate,
                  Chalk, and Talc since 2011, committed to quality and
                  sustainability.
                </p>
              </div>
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
            <div className="w-[40%] md:w-[55%] flex items-center justify-center">
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-white mb-3">
                  Quick Links
                </p>
                <p className="text-sm text-[#a7a6a6] my-1">Services</p>
                <p className="text-sm text-[#a7a6a6] my-1">Products</p>
                <p className="text-sm text-[#a7a6a6] my-1">About Us</p>
                <p className="text-sm text-[#a7a6a6] my-1">Contact Us</p>
              </div>
            </div>
          </div>

          <div className="flex md:w-[25%] flex-col md:gap-5 gap-2 mt-12 md:mt-0">
            <p className="text-md md:text-lg text-white">
              Phase 3, Hattar Industrial Estate, Pakistan، Haripur, 22620
            </p>
            <p className="text-sm text-white">(0995) 617504</p>
            <p className="text-sm text-white">info@chinarminerals.com</p>
          </div>
        </div>

        <div className="absolute bottom-28 lg:bottom-36 w-full my-2 lg:my-6 flex justify-center">
          <div className="w-[80%] h-0 border border-[#a7a6a6]" />
        </div>

        <div className="absolute bottom-12 w-full flex justify-center items-center h-16 lg:h-24">
          <p className="text-[#a7a6a6]">© 2011 Chinar . All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

// <div className="absolute h-full w-full px-[6%] lg:px-[10%] flex flex-col justify-center">
//   <div className="grid grid-rows-2 md:flex md:justify-between md:items-center">
//     <div className="flex space-between lg:w-[75%] w-full">
//       <div className="flex flex-col gap-4 lg:w-[40%] w-[60%]">
//         <Link href={"/pages/home"} className="mb-5">
//           <Image
//             src={AppImages.logoTransparent}
//             alt="Logo"
//             width={150}
//             height={100}
//           />
//         </Link>
//         <p className="font-semibold text-white mb-5">
//           Chinar Mineral Prcessing Mills
//         </p>
//         <p className="text-xs text-white">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s,
//         </p>
//         <div className="flex justify-start items-center gap-3">
//           <Image src={AppImages.youtube} alt="Icon" height={20} />
//           <Image src={AppImages.twitter} alt="Icon" height={20} />
//           <Image src={AppImages.instagram} alt="Icon" height={20} />
//           <Image
//             src={AppImages.facebook}
//             alt="Icon"
//             height={22}
//             className="mt-1"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col gap-2 justify-center items-center lg:w-[60%] w-[40%]">
//         <p className="font-semibold text-sm text-white mb-3">Quick Links</p>
//         <p className=" text-sm text-[#a7a6a6]">Services</p>
//         <p className="text-sm text-[#a7a6a6]">Products</p>
//         <p className="text-sm text-[#a7a6a6]">About Us</p>
//         <p className="text-sm text-[#a7a6a6]">Contact Us</p>
//       </div>
//     </div>

//     <div className="flex flex-col gap-5 lg:justify-center justify-start lg:items-start items-center md:w-[25%] w-full ">
//       <p className="text-lg text-white">
//         123 Market St. #22B Charlottesville, California 44635
//       </p>
//       <p className="text-sm text-white">(434) 546-4356</p>
//       <p className="text-sm text-white">contact@lift.agency</p>
//     </div>
//   </div>

//   <div className="w-full h-0 border border-[#a7a6a6] my-2 lg:my-8" />

//   <div className="w-full flex justify-center items-center text-[#a7a6a6]">
//     <p>© 2020 shaheen . All rights reserved</p>
//   </div>
// </div>;
