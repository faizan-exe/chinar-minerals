import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../sharedComponents/Navbar";

interface AboutUsComponentInterface {}

export default function AboutUsComponent(props: AboutUsComponentInterface) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    setStartAnimation(true);
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
    <div>
      <Navbar isHeaderShow={isHeaderShow} />
      <p className="text-black">About Us</p>
    </div>
  );
}
