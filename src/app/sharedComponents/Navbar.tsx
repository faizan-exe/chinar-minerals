"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import { AppImages } from "../utils/AppImages";

interface NavbarComponentInterface {}

export default function Navbar(props: NavbarComponentInterface) {
  const [isProductOpen, setIsProductsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);
  return (
    <div
      className={`bg-transparent hidden lg:flex lg:justify-evenly justify-start items-center lg:h-28 xl:h-32 2xl:h-36 absolute top-0 lg:w-[95%] xl:w-[90%] z-10 lg:mx-[3%] xl:mx-[5%] border-b-2 border-white transition-all duration-700 ease-in-out transform ${
        startAnimation ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href={"/pages/home"} className="lg:flex hidden items-center">
        <Image
          src={AppImages.logoTransparent}
          alt="Flexiwork Logo"
          className="
          lg:w-[120px] xl:w-[150px] 2xl:w-[180px] lg:h-[80px] xl:h-[100px] 2xl:h-[120px]"
        />
      </Link>

      <Link href={"/pages/home"}>
        <p className="2xl:text-lg text-md text-white">Home</p>
      </Link>
      <Link href={"/pages/services"}>
        <p className="2xl:text-lg text-md text-white flex items-center gap-2">
          Services
          <span>
            <Image src={AppImages.dropdown} alt="Icon" height={8} />
          </span>
        </p>
      </Link>
      <Link href={"/pages/products"}>
        <p
          className="2xl:text-lg text-md text-white flex items-center gap-2"
          onMouseEnter={() => {
            setIsProductsOpen(true);
          }}
          onMouseLeave={() => {
            setIsProductsOpen(false);
          }}
        >
          Products
          <span>
            <Image src={AppImages.dropdown} alt="Icon" height={8} />
          </span>
        </p>
        {isProductOpen && (
          <div
            className=" bg-white absolute shadow px-2"
            onMouseEnter={() => {
              setIsProductsOpen(true);
            }}
            onMouseLeave={() => {
              setIsProductsOpen(false);
            }}
          >
            <p className="text-md text-black py-1 border-b border-b-black hover:bg-[#b3b3b3]">
              Phosphate
            </p>
            <p className="text-md text-black py-1 border-b border-b-black hover:bg-[#b3b3b3]">
              Iron
            </p>
            <p className="text-md text-black py-1 border-b border-b-black hover:bg-[#b3b3b3]">
              Copper
            </p>
            <p className="text-md text-black py-1 hover:bg-[#b3b3b3]">
              Phosphorus
            </p>
          </div>
        )}
      </Link>
      <Link href={"/pages/prices"}>
        <p className="2xl:text-lg text-md text-white">Prices</p>
      </Link>
      <Link href={"/pages/aboutUs"}>
        <p className="2xl:text-lg text-md text-white">About us</p>
      </Link>
      <Link href={"/pages/contactUs"}>
        <p className="2xl:text-lg text-md text-white">Contact Us</p>
      </Link>
    </div>
  );
}
