import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";
import Map from "../sharedComponents/Map";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ContactUsComponentInterface {}

export default function ContactUsComponent(props: ContactUsComponentInterface) {
  const { register, handleSubmit, reset } = useForm();
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;

  const sendEmail = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thank you for contacting us.", {
          duration: 4000,
          position: "bottom-right",
          style: {
            border: "1px solid #161B1B",
            padding: "16px",
            color: "#D7051D",
          },
          iconTheme: {
            primary: "#CE0000",
            secondary: "#FFFFFF",
          },
        });
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error, e.g., show an error message
    }
  };

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
            Home {" > "}
            <span className="text-[#D7051D]">Contact Us</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Contact Us
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Our purpose is to bring people and resources together to build a
            better world.
          </p>
        </div>
      </div>

      <div className="flex gap-20 lg:gap-0 flex-col lg:flex-row px-[5%] lg:px-[8%] xl:px-[15%] mt-5 my-16">
        <div className="w-full lg:w-[35%]" data-aos="fade-right">
          <p className="text-black text-2xl font-bold mt-6 mb-4">
            Find Us on Map
          </p>
          <p className="text-[#757474] text-sm font-normal">
            Located in Haripur, Pakistan
          </p>
          <div className="mt-5">
            <Map />
          </div>
        </div>
        <div className="w-full lg:w-[65%]" data-aos="fade-left">
          <p className="text-black text-2xl font-bold mt-6 mb-4">Write Us</p>
          <p className="text-[#757474]  text-sm font-normal">
            Contact Us & we will get back to you at our earliest.
          </p>
          <form
            className="border border-black rounded-lg px-6 py-10 mt-5"
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="w-full">
                <p className="text-black text-xs font-normal">First Name</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                  {...register("fname")}
                />
              </div>
              <div className="w-full">
                <p className="text-black text-xs font-normal">Last Name</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                  {...register("lname")}
                />
              </div>
            </div>
            <div className="flex gap-5 flex-col lg:flex-row mt-8">
              <div className="w-full">
                <p className="text-black text-xs font-normal">Email</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                  {...register("email")}
                />
              </div>
              <div className="w-full">
                <p className="text-black text-xs font-normal">Phone</p>
                <input
                  type="text"
                  className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                  {...register("number")}
                />
              </div>
            </div>
            <div className="w-full mt-8">
              <p className="text-black text-xs font-normal">Subject</p>
              <input
                type="text"
                className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                {...register("subject")}
              />
            </div>
            <div className="w-full mt-8">
              <p className="text-black text-xs font-normal">Message</p>
              <input
                type="text"
                className="w-full h-12 px-4 border-b border-black focus:outline-none focus:border-b text-black"
                {...register("message")}
              />
            </div>
            <div className="flex justify-between mt-8">
              <div className="w-full"></div>
              <button
                type="submit"
                className="bg-[#D7051D] text-lg md:text-xl text-white py-2 lg:py-3 px-5 lg:px-8 rounded-lg my-5"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="flex gap-10 lg:gap-5 flex-col lg:flex-row px-[5%] lg:px-[8%] xl:px-[15%] mt-5 my-16"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-1/3 flex justify-start">
          <div className="flex flex-col items-start">
            <p className="text-black font-bold text-3xl my-4">Head Office</p>
            <div className="flex gap-5 my-4">
              <Image
                src={AppImages.addressIcon}
                alt="Icon"
                className="h-8 w-8"
              />
              <div className="flex flex-col gap-2">
                <p className="text-black">Chinar Mineral processing Mills</p>
                <p className="text-black">plot # 66 phase III,</p>
                <p className="text-black">Hattar industrial estate,</p>
                <p className="text-black">Haripur, Pakistan</p>
              </div>
            </div>
            <div className="flex gap-5 my-4">
              <Image
                src={AppImages.mobileIcon}
                alt="Icon"
                className="h-8 w-8"
              />
              <div className="flex flex-col gap-2">
                <p className="text-black">+92-3000222914</p>
                <p className="text-black">+92-300-0301241</p>
                <p className="text-black">+92-300-0301243</p>
                <p className="text-black">+92-995-617504</p>
              </div>
            </div>
            <div className="flex gap-5 mt-4 mb-2">
              <Image src={AppImages.mailIcon} alt="Icon" className="h-8 w-8" />
              <div>
                <p className="text-black">info@chinargoc.com</p>
              </div>
            </div>
            <p className="text-black">Send us your query at anytime!</p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex lg:justify-center justify-start">
          <div className="flex flex-col items-start">
            <p className="text-black font-bold text-3xl my-4">Karachi Office</p>
            <div className="flex gap-5 my-4">
              <Image
                src={AppImages.addressIcon}
                alt="Icon"
                className="h-8 w-8"
              />
              <div className="flex flex-col gap-2">
                <p className="text-black">a/2 Gohar chamber,</p>
                <p className="text-black">
                  CC Area Block-7/8, K.c.h.c Near Duty
                </p>
                <p className="text-black">Free Shop,</p>
                <p className="text-black">Shahra-e- faisal, Karachi</p>
              </div>
            </div>
            <div className="flex gap-5 my-4">
              <Image
                src={AppImages.mobileIcon}
                alt="Icon"
                className="h-8 w-8"
              />
              <div>
                <p className="text-black">+92-300-0301248</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex lg:justify-end justify-start">
          <div className="flex flex-col items-start">
            <p className="text-black font-bold text-3xl my-4">Lahore Office</p>
            <div className="flex gap-5 my-4">
              <Image
                src={AppImages.addressIcon}
                alt="Icon"
                className="h-8 w-8"
              />
              <div className="flex flex-col gap-2">
                <p className="text-black">141 G, Commercial Area,</p>
                <p className="text-black">Phase 1 DHA, </p>
                <p className="text-black">Lahore</p>
              </div>
            </div>
            <div className="flex gap-5 my-4">
              <Image
                src={AppImages.mobileIcon}
                alt="Icon"
                className="h-8 w-8"
              />
              <div>
                <p className="text-black">+92-324-4219809</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
