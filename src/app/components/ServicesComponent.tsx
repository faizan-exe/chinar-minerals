import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface ServicesComponentInterface {}

export default function ServicesComponent(props: ServicesComponentInterface) {
  return (
    <div>
      <Navbar />
      <div className="relative bg-center w-full h-[calc(70vh)] pt-[10%]">
        <Image src={AppImages.productsBg} alt="Image" layout="fill" />
        {/* <div className="relative w-full h-full bgBlack" /> */}
      </div>
      <div className="relative mt-[-104px] z-10 px-[5%] lg:px-[8%] xl:px-[15%] flex justify-center">
        <div className="bg-white flex flex-col justify-start items-start w-[80%] h-52 shadow py-6 px-12 rounded-lg">
          <p className="text-[#757474] font-normal text-sm">
            Home {" > "} Services {" > "}
            <span className="text-[#D7051D]">Mineral Analysis</span>
          </p>
          <p className="text-black text-3xl font-bold mt-8 mb-2">Services</p>
          <p className="text-[#757474] text-center text-sm font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="flex xl:gap-8 gap-5 px-[5%] lg:px-[8%] xl:px-[15%] my-10">
        <div className="flex flex-col w-[25%]">
          <div className="flex items-baseline">
            <p className="font-bold lg:text-xl xl:text-2xl text-black">
              Our Services
            </p>
            <div className="h-[2px] w-[70px] border-2 border-[#D7051D] ml-2" />
          </div>
          <div className="p-8 shadow my-5 rounded-md">
            <ul>
              <li className="text-black my-3">Mineral Analysis</li>
              <li className="text-black my-3">Refine</li>
              <li className="text-black my-3">Logistics Service</li>
              <li className="text-black my-3">Service 2</li>
            </ul>
          </div>
        </div>
        <div className="w-[75%]">
          <p className="text-black text-xl font-semibold mb-4">
            Mineral Analysis
          </p>
          <p className="text-black text-md leading-10">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="px-[5%] lg:px-[8%] xl:px-[15%] my-10">
        <Image src={AppImages.services1} alt="Image" />
      </div>
      <div className="px-[5%] lg:px-[8%] xl:px-[15%] mt-5 my-16">
        <p className="text-black text-xl font-semibold mb-4 mt-12">
          Heading 1:
        </p>
        <p className="text-black text-md leading-10">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>

      <div className="relative bg-center w-full h-[calc(50vh)] py-10">
        <Image src={AppImages.services2} alt="Image" layout="fill" />
        <div className="absolute h-full w-[65%] px-[5%] lg:px-[8%] xl:px-[15%] flex flex-col justify-center">
          <p className="font-bold text-white text-3xl my-10">
            Product Safety Data Sheets
          </p>
          <p className="text-white text-md my-15">
            Product Safety Data Sheets provide critical information about the
            properties, environmental impacts, and safe handling (including
            storage and disposal) of our products.
          </p>
          <button className="bg-[#D7051D] py-5 px-10 w-48 rounded-md my-20 text-white">
            View More
          </button>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full flex justify-between items-center px-[5%] lg:px-[8%] xl:px-[10%] py-[5%]">
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
