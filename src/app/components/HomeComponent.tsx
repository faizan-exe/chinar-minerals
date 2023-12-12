import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import { Butterfly_Kids } from "next/font/google";

interface HomeComponentInterface {}

export default function HomeComponent(props: HomeComponentInterface) {
  return (
    <div>
      <Navbar />
      <div className="relative bg-center w-full h-[calc(90vh)] pt-[10%]">
        <Image src={AppImages.backgroundImage} alt="Image" layout="fill" />
        <div className="absolute h-full w-full px-36">
          <h1 className="font-bold text-white text-6xl leading-snug">
            Innovating the <br /> Future of Mining
          </h1>
          <div className="max-w-[60%] my-[4%]">
            <p className="text-2xl">
              Join us on a journey to revolutionize mining practices. Chinar
              Minerals is at the forefront of implementing cutting-edge
              technology and sustainable methods to reshape the global mining
              landscape.
            </p>
          </div>
          <div className="flex gap-10">
            <button className="bg-transparent text-white text-2xl font-semibold border-white border-2 rounded-lg w-64 py-[1%]">
              Contact Us
            </button>
            <button className="bg-[#D7051D] text-white text-2xl font-semibold rounded-lg w-64 py-[1%]">
              Explore our World
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 mt-[-160px] z-10 justify-center">
        <div className="bg-white flex flex-col justify-center items-center w-[20%] h-60 shadow">
          <Image src={AppImages.sustIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl">Sustainability</p>
          <p className="text-black text-center text-sm px-5">
            These texts aim to encapsulate the ethos of Chinar Minerals
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center w-[20%] h-60 shadow">
          <Image src={AppImages.sustIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl">Sustainability</p>
          <p className="text-black text-center text-sm px-5">
            These texts aim to encapsulate the ethos of Chinar Minerals
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center w-[20%] h-60 shadow">
          <Image src={AppImages.sustIcon} alt="Icon" height={50} width={50} />
          <p className="text-black text-xl">Sustainability</p>
          <p className="text-black text-center text-sm px-5">
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
            <div className="bg-[#D7051D] absolute bottom-[168px] left-[-140px] rotate-90 py-8 px-16">
              <p className="text-white font-extrabold text-3xl">
                25 Years Experience
              </p>
            </div>
            <div className="absolute bottom-[-50px] right-[-120px] bg-slate-950">
              <Image
                src={AppImages.videoThumbnail}
                alt="Icon"
                height={300}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="h-[75%]">
            <p className="text-[#D7051D] font-extrabold text-lg mb-[2%]">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-black font-extrabold text-3xl my-[2%]">
              We're finding better ways to provide the materials the world needs
            </p>
            <p className="text-black font-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s
            </p>
          </div>
          <div className="h-[25%] flex gap-10 px-[10%] justify-center">
            <div>
              <p className="text-black font-extrabold text-3xl my-[2%]">
                Shaheen
              </p>
              <p className="text-black text-3xl my-[2%]">CEO</p>
            </div>
            <div className="h-[60%] w-0 border-2 border-black"></div>
            <div>
              <Image
                src={AppImages.signature}
                alt="Signature"
                className="h-[60%] w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full px-[10%] py-[5%]">
        <div className="w-[50%]">
          <p className="text-black font-extrabold text-3xl my-[2%]">
            Our Business
          </p>
          <p className="text-black font-extrabold text-2xl my-[2%]">
            We're finding better ways to provide the materials the world needs
          </p>
          <p className="text-black text-lg my-[2%]">
            For 150 years we’ve been looking for new and better ways of doing
            things. You'll find our teams around the world working to reduce our
            carbon footprint, partnering to develop new technologies to
            decarbonise steel and aluminium production, and creating new
            products from waste
          </p>
          <button className="bg-[#D7051D] p-5 pl-5 rounded-md my-[4%]">
            View More
          </button>
        </div>
        <div className="w-[50%]">
          <div className="relative">
            <Image src={} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
