"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import { AppImages } from "../utils/AppImages";

interface NavbarComponentInterface {
  isHeaderShow: any;
}

export default function Navbar(props: NavbarComponentInterface) {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isProductMobOpen, setIsProductMobOpen] = useState(false);
  const [isServiceMobOpen, setIsServiceMobOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);
  return (
    <>
      {isSidebarOpen ? (
        <div className="w-[calc(100vw)] h-[calc(100vh)] bg-white fixed top-0 z-50 px-[5%] overflow-y-scroll">
          <div className="flex justify-between items-center pr-3">
            <Image
              src={AppImages.logoTransparent}
              alt="Logo"
              className="w-[110px] h-[70px]"
            />
            <Image
              src={AppImages.cross}
              alt="Logo"
              className="w-[30px] h-[30px]"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            />
          </div>
          <Link href={"/pages/home"}>
            <p className="text-black text-lg py-4 border-b-2 flex items-center">
              Home
            </p>
          </Link>
          <Link href={"/pages/services"}>
            <p className="text-black text-lg py-4 border-b-2 flex items-center">
              Services
            </p>
          </Link>
          <div className="flex justify-between items-center pr-3 py-3 border-b-2">
            <Link href={"/pages/products/granite"}>
              <p className="text-black text-lg">Products</p>
            </Link>
            <Image
              src={AppImages.arrow}
              alt="Logo"
              className="w-[25px] h-[25px]"
              style={
                isProductMobOpen
                  ? { transform: "rotate(270deg)" }
                  : { transform: "rotate(90deg)" }
              }
              onClick={() => {
                setIsProductMobOpen(!isProductMobOpen);
              }}
            />
          </div>
          {isProductMobOpen ? (
            <div className="bg-white px-[5%]">
              <Link href={"/pages/products/granite"}>
                <p className="text-base text-black py-3 border-b-2">Granite</p>
              </Link>
              <Link href={"/pages/products/rocksheet"}>
                <p className="text-base text-black py-3 border-b-2">
                  Rocksheet
                </p>
              </Link>
              <p className="text-base text-black py-3 border-b-2">Copper</p>
              <p className="text-base text-black py-3">Phosphorus</p>
            </div>
          ) : null}
          <Link href={"/pages/prices"}>
            <p className="text-black text-lg py-3 border-b-2 flex items-center">
              Prices
            </p>
          </Link>
          <Link href={"/pages/aboutUs"}>
            <p className="text-black text-lg py-3 border-b-2 flex items-center">
              About Us
            </p>
          </Link>
          <Link href={"/pages/contactUs"}>
            <p className="text-black text-lg py-3">Contact Us</p>
          </Link>
        </div>
      ) : null}
      <>
        <div
          className={`fixed flex md:justify-evenly justify-between items-center h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 top-0 w-full z-40 px-[5%] md:px-[3%] xl:px-[5%] transition-all duration-1000 ease-in-out transform ${
            startAnimation ? "translate-y-0" : "-translate-y-full"
          }`}
          style={
            props.isHeaderShow
              ? {
                  backgroundColor: "white",
                  boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
                  color: "black",
                }
              : { background: "transparent" }
          }
        >
          <div className="w-[90%] h-0 border border-white absolute bottom-0" />
          <Link href={"/pages/home"} className="flex items-center">
            <Image
              src={AppImages.logoTransparent}
              alt="Logo"
              className="
            w-[90px] md:w-[120px] xl:w-[150px] 2xl:w-[180px] h-[60px] md:h-[80px] xl:h-[100px] 2xl:h-[120px]"
            />
          </Link>

          <div className="flex md:hidden h-full items-center pr-2">
            <Image
              src={
                props.isHeaderShow
                  ? AppImages.hamburgerBlack
                  : AppImages.hamburgerWhite
              }
              alt="Icon"
              className="h-10 w-auto"
              onClick={() => {
                setIsSidebarOpen(true);
              }}
            />
          </div>

          <Link href={"/pages/home"} className="md:flex hidden">
            <p
              className="2xl:text-lg lg:text-base text-sm"
              style={
                props.isHeaderShow ? { color: "black" } : { color: "white" }
              }
            >
              Home
            </p>
          </Link>
          <Link href={"/pages/services"} className="md:flex hidden">
            <p
              className="2xl:text-lg lg:text-base text-sm"
              style={
                props.isHeaderShow ? { color: "black" } : { color: "white" }
              }
            >
              Services
            </p>
          </Link>
          <Link href={"/pages/products/granite"} className="md:flex hidden">
            <p
              className="2xl:text-lg lg:text-base text-sm flex items-center gap-1 lg:gap-2 relative"
              style={
                props.isHeaderShow ? { color: "black" } : { color: "white" }
              }
              onMouseEnter={() => {
                setIsProductOpen(true);
              }}
              onMouseLeave={() => {
                setIsProductOpen(false);
              }}
            >
              Products
              <span>
                <Image
                  src={
                    props.isHeaderShow
                      ? AppImages.dropdownBlack
                      : AppImages.dropdownWhite
                  }
                  alt="Icon"
                  className="h-[6px] lg:h-2 w-auto"
                />
              </span>
              {isProductOpen && (
                <div
                  style={
                    props.isHeaderShow
                      ? {
                          backgroundColor: "white",
                          boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
                          color: "black",
                        }
                      : {
                          backgroundColor: "#D7051D",
                          color: "white",
                        }
                  }
                  className="absolute top-[25px] shadow"
                  onMouseEnter={() => {
                    setIsProductOpen(true);
                  }}
                  onMouseLeave={() => {
                    setIsProductOpen(false);
                  }}
                >
                  <Link href={"/pages/products/granite"}>
                    <p
                      className={`text-base p-3 hover:bg-[#9B0113] ${
                        props.isHeaderShow
                          ? "hover:bg-[#acacac]"
                          : "hover:bg-[#9B0113]"
                      }`}
                    >
                      Granite
                    </p>
                  </Link>
                  <Link href={"/pages/products/rocksheet"}>
                    <p
                      className={`text-base p-3 hover:bg-[#9B0113] ${
                        props.isHeaderShow
                          ? "hover:bg-[#acacac]"
                          : "hover:bg-[#9B0113]"
                      }`}
                    >
                      Rocksheet
                    </p>
                  </Link>
                  <p
                    className={`text-base p-3 hover:bg-[#9B0113] ${
                      props.isHeaderShow
                        ? "hover:bg-[#acacac]"
                        : "hover:bg-[#9B0113]"
                    }`}
                  >
                    Copper
                  </p>
                  <p
                    className={`text-base p-3 hover:bg-[#9B0113] ${
                      props.isHeaderShow
                        ? "hover:bg-[#acacac]"
                        : "hover:bg-[#9B0113]"
                    }`}
                  >
                    Phosphorus
                  </p>
                </div>
              )}
            </p>
          </Link>
          <Link href={"/pages/prices"} className="md:flex hidden">
            <p
              className="2xl:text-lg lg:text-base text-sm"
              style={
                props.isHeaderShow ? { color: "black" } : { color: "white" }
              }
            >
              Prices
            </p>
          </Link>
          <Link href={"/pages/aboutUs"} className="md:flex hidden">
            <p
              className="2xl:text-lg lg:text-base text-sm"
              style={
                props.isHeaderShow ? { color: "black" } : { color: "white" }
              }
            >
              About us
            </p>
          </Link>
          <Link href={"/pages/contactUs"} className="md:flex hidden">
            <p
              className="2xl:text-lg lg:text-base text-sm"
              style={
                props.isHeaderShow ? { color: "black" } : { color: "white" }
              }
            >
              Contact Us
            </p>
          </Link>
        </div>
      </>
    </>
  );
}
