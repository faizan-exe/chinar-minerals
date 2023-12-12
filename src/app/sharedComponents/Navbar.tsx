"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppImages } from "../utils/AppImages";

interface NavbarComponentInterface {}

export default function Navbar(props: NavbarComponentInterface) {
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setShow(true);
  };

  return (
    <div className="bg-transparent flex lg:justify-evenly justify-start items-center h-36 absolute top-0 w-[90%] z-10 mx-[5%] border-b-2 border-white">
      <Link href={"/pages/home"} className="lg:flex hidden items-center">
        <Image
          src={AppImages.logoTransparent}
          alt="Flexiwork Logo"
          width={180}
          height={100}
        />
      </Link>

      <Link href={"/pages/home"}>
        <p className="text-lg  text-white">Home</p>
      </Link>
      <Link href={"/pages/services"}>
        <p className="text-lg text-white">Services</p>
      </Link>
      <Link href={"/pages/prices"}>
        <p className="text-lg text-white">Prices</p>
      </Link>
      <Link href={"/pages/aboutUs"}>
        <p className="text-lg text-white">About us</p>
      </Link>
      <Link href={"/pages/contactUs"}>
        <p className="text-lg text-white">Contact Us</p>
      </Link>
    </div>
  );
}
