import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";

interface HomeComponentInterface {}

export default function HomeComponent(props: HomeComponentInterface) {
  return (
    <div>
      <Navbar />
      <div className="relative bg-center w-full h-[calc(90vh)] pt-60 ">
        <Image src={AppImages.backgroundImage} alt="" layout="fill" />
        <div className="absolute h-full w-full px-36">
          <h1 className="font-bold text-white text-6xl leading-snug">
            Innovating the <br /> Future of Mining
          </h1>
          <div className="max-w-[60%] my-14">
            <p className="text-2xl">
              Join us on a journey to revolutionize mining practices. Chinar
              Minerals is at the forefront of implementing cutting-edge
              technology and sustainable methods to reshape the global mining
              landscape.
            </p>
          </div>
          <div className="flex gap-10">
            <button className="bg-transparent text-white text-2xl font-semibold border-white border-2 rounded-lg w-64 py-5">
              Contact Us
            </button>
            <button className="bg-[#D7051D] text-white text-2xl font-semibold rounded-lg w-64 py-5">
              Explore our World
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
