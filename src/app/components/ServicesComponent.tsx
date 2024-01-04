import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface ServicesComponentInterface {}

export default function ServicesComponent(props: ServicesComponentInterface) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;
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
            Home {" > "} Services {" > "}
            <span className="text-[#D7051D]">Mineral Analysis</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            Services
          </p>
          <p className="text-[#757474] text-sm font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xl:gap-8 gap-5 px-[5%] lg:px-[8%] xl:px-[15%] my-10">
        <div
          className="flex flex-col md:w-[30%] lg:w-[25%]"
          data-aos="fade-right"
        >
          <div className="flex items-baseline">
            <p className="font-bold text-xl md:text-lg lg:text-xl xl:text-2xl text-black">
              Our Services
            </p>
            <div className="h-[2px] w-[70px] xl:w-[50px] 2xl:w-[70px] border-2 border-[#D7051D] ml-2" />
          </div>
          <div className="p-8 shadow my-5 rounded-md">
            <ul>
              <li className="text-black my-4 md:my-3">Mineral Analysis</li>
              <li className="text-black my-4 md:my-3">Approach</li>
              <li className="text-black my-4 md:my-3">Status</li>
              <li className="text-black my-4 md:my-3">Product Safety Data</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[70%] lg:w-[75%]" data-aos="fade-left">
          <p className="text-black text-xl font-semibold mb-4">
            Mineral Analysis
          </p>
          <p className="text-black text-base leading-10">
            Understanding the importance of quality and compliance, we offer
            thorough mineral analysis services. Our state-of-the-art laboratory
            facilities are equipped with advanced analytical tools to perform
            detailed examinations. These include compositional analysis,
            particle size distribution, purity checks, and more. Our skilled
            technicians ensure that each product adheres to strict industry
            standards and client specifications.
          </p>
        </div>
      </div>

      <div className="bg-[#f3f3f3] pl-0 lg:pr-10 lg:my-10 mt-10 mb-0 h-[calc(60vh)] lg:h-[calc(60vh)] xl:h-[calc(50vh)] flex flex-col lg:flex-row items-center">
        <div
          className="relative w-full h-full lg:w-[45%]"
          data-aos="fade-right"
        >
          <Image
            src={AppImages.services1}
            alt="Image"
            layout="fill"
            className="absolute"
          />
          <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0" />
          <div
            className="absolute py-16 px-10 z-10 w-full lg:w-[80%] h-full"
            data-aos="fade-right"
          >
            <p className="text-white text-3xl xl:text-4xl 2xl:text-5xl lg:leading-loose font-bold mb-10 abolute">
              Our approach <br /> and position
            </p>
            <p className="text-white text-sm">
              We recognise our business interacts with a range of material
              sustainability issue areas
            </p>
          </div>
        </div>

        <div
          className="hidden lg:flex lg:flex-row gap-6 w-full lg:w-[80%] xl:w-[70%] ml-[-60px] z-10 justify-center"
          data-aos="fade-left"
        >
          <div className="bg-white flex flex-col w-[50%] shadow px-6 py-6">
            <div className="flex basis-2/12 justify-center items-center w-full">
              <Image
                src={AppImages.cccIcon}
                alt="Icon"
                height={45}
                width={45}
              />
            </div>
            <div className="flex basis-2/12 justify-center items-center w-full">
              <p className="text-black text-center 2xl:text-lg xl:text-base font-semibold">
                Client-Centric Customization
              </p>
            </div>
            <div className="flex basis-8/12 justify-center items-start w-full pt-1">
              <p className="text-black text-center text-xs font-normal">
                We believe each client is unique, and so are their needs. Our
                approach is to listen closely, understand the specific
                requirements, and provide customized solutions that deliver
                beyond expectations.
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col w-[50%] shadow px-6 py-6">
            <div className="flex basis-2/12 justify-center items-center w-full">
              <Image
                src={AppImages.innovSolIcon}
                alt="Icon"
                height={45}
                width={45}
              />
            </div>
            <div className="flex basis-2/12 justify-center items-center w-full">
              <p className="text-black text-center 2xl:text-lg xl:text-base font-semibold">
                Innovative Solutions
              </p>
            </div>
            <div className="flex basis-8/12 justify-center items-start w-full pt-1">
              <p className="text-black text-center text-xs font-normal">
                Staying at the forefront of technology, we continuously seek
                innovative methods and techniques to improve our services. This
                positions us as industry leaders, providing our clients with
                cutting-edge solutions that offer enhanced efficiency and value.
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col w-[50%] shadow px-6 py-6">
            <div className="flex basis-2/12 justify-center items-center w-full">
              <Image
                src={AppImages.sustPracIcon}
                alt="Icon"
                height={45}
                width={45}
              />
            </div>
            <div className="flex basis-2/12 justify-center items-center w-full">
              <p className="text-black text-center 2xl:text-lg xl:text-base font-semibold">
                Sustainable Practices
              </p>
            </div>
            <div className="flex basis-8/12 justify-center items-start w-full pt-1">
              <p className="text-black text-center text-xs font-normal">
                Our commitment to sustainability is unwavering. We adopt
                environmentally responsible practices in all our operations,
                ensuring that we not only meet the current needs of our clients
                but also protect the future of our planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#f3f3f3] flex flex-col lg:hidden gap-6 w-full z-10 justify-center px-[5%] py-10"
        data-aos="fade-down"
      >
        <div className="bg-white flex flex-col w-full shadow px-6 py-6">
          <div className="flex basis-2/12 justify-center items-center w-full">
            <Image src={AppImages.cccIcon} alt="Icon" height={45} width={45} />
          </div>
          <div className="flex basis-2/12 justify-center items-center w-full">
            <p className="text-black text-center 2xl:text-lg xl:text-base font-semibold">
              Client-Centric Customization
            </p>
          </div>
          <div className="flex basis-8/12 justify-center items-start w-full pt-1">
            <p className="text-black text-center text-xs font-normal">
              We believe each client is unique, and so are their needs. Our
              approach is to listen closely, understand the specific
              requirements, and provide customized solutions that deliver beyond
              expectations.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col w-full shadow px-6 py-6">
          <div className="flex basis-2/12 justify-center items-center w-full">
            <Image
              src={AppImages.innovSolIcon}
              alt="Icon"
              height={45}
              width={45}
            />
          </div>
          <div className="flex basis-2/12 justify-center items-center w-full">
            <p className="text-black text-center 2xl:text-lg xl:text-base font-semibold">
              Innovative Solutions
            </p>
          </div>
          <div className="flex basis-8/12 justify-center items-start w-full pt-1">
            <p className="text-black text-center text-xs font-normal">
              Staying at the forefront of technology, we continuously seek
              innovative methods and techniques to improve our services. This
              positions us as industry leaders, providing our clients with
              cutting-edge solutions that offer enhanced efficiency and value.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col w-full shadow px-6 py-6">
          <div className="flex basis-2/12 justify-center items-center w-full">
            <Image
              src={AppImages.sustPracIcon}
              alt="Icon"
              height={45}
              width={45}
            />
          </div>
          <div className="flex basis-2/12 justify-center items-center w-full">
            <p className="text-black text-center 2xl:text-lg xl:text-base font-semibold">
              Sustainable Practices
            </p>
          </div>
          <div className="flex basis-8/12 justify-center items-start w-full pt-1">
            <p className="text-black text-center text-xs font-normal">
              Our commitment to sustainability is unwavering. We adopt
              environmentally responsible practices in all our operations,
              ensuring that we not only meet the current needs of our clients
              but also protect the future of our planet.
            </p>
          </div>
        </div>
      </div>

      <div
        className="px-[5%] lg:px-[8%] xl:px-[15%] mt-5 my-16"
        data-aos="fade-down"
      >
        <p className="text-black text-xl font-semibold mb-4 mt-12">
          Efficient Logistics and Timely Delivery
        </p>
        <p className="text-black text-base leading-10">
          At Chinar Minerals, efficient logistics and timely delivery are the
          cornerstones of our commitment to client satisfaction. Our
          comprehensive approach encompasses customized logistics planning, a
          robust global transportation network, and real-time monitoring to
          ensure that every shipment is delivered on schedule and in perfect
          condition. By understanding and adapting to each client's unique needs
          and employing a combination of advanced scheduling tools, diverse
          transportation modes, and strict quality control measures, we
          guarantee a seamless delivery process from our facility to your
          doorstep. Our dedicated team works tirelessly, leveraging partnerships
          with reputable carriers and employing responsive problem-solving
          strategies, to uphold our promise of efficiency, reliability, and
          excellence in every delivery, reinforcing our role as a trusted
          partner in your success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="bg-[#f3f3f3] md:w-[40%] py-8" data-aos="fade-right">
          <p className="text-[#D7051D] font-bold text-4xl flex justify-center items-center">
            Our Status
          </p>
        </div>
        <div
          className="bg-[#141414] md:w-[20%] flex gap-2 justify-center items-center py-8 border-b-2 md:border-b-0 md:border-r-2"
          data-aos="fade-left"
        >
          <Image
            src={AppImages.experienceVector}
            alt="Icon"
            className="h-9 w-12 md:h-7 md:w-10 lg:h-9 lg:w-12"
          />
          <div>
            <p className="text-white font-bold text-2xl md:text-base lg:text-xl">
              10+ Years
            </p>
            <p className="text-white text-xl md:text-base lg:text-xl">
              Experience
            </p>
          </div>
        </div>
        <div
          className="bg-[#141414] md:w-[20%] flex gap-2 justify-center items-center py-8 border-b-2 md:border-b-0 md:border-r-2"
          data-aos="fade-left"
        >
          <Image
            src={AppImages.buildingVector}
            alt="Icon"
            className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
          <div>
            <p className="text-white font-bold text-2xl md:text-base lg:text-xl">
              6+
            </p>
            <p className="text-white text-xl md:text-base lg:text-xl">
              Buildings
            </p>
          </div>
        </div>
        <div
          className="bg-[#141414] md:w-[20%] flex gap-2 justify-center items-center py-8"
          data-aos="fade-left"
        >
          <Image
            src={AppImages.clientVector}
            alt="Icon"
            className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
          <div>
            <p className="text-white font-bold text-2xl md:text-base lg:text-xl">
              500+
            </p>
            <p className="text-white text-xl md:text-base lg:text-xl">
              Customers
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-center w-full h-[calc(50vh)] xl:h-[calc(60vh)] 2xl:h-[calc(50vh)] 2xl:py-10 xl:py-6">
        <Image src={AppImages.services2} alt="Image" layout="fill" />
        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0"></div>
        <div
          className="absolute h-full w-full md:w-[65%] px-[5%] lg:px-[8%] xl:px-[15%] flex flex-col justify-center"
          data-aos="fade-right"
        >
          <p className="font-bold text-white text-lg md:text-xl lg:text-3xl my-3 xl:my-6 2xl:my-10">
            Product Safety Data Sheets
          </p>
          <p className="text-white text-sm md:text-base">
            We prioritize the safety and well-being of our clients and
            employees. Our Product Safety Data Sheets (PSDS) provide detailed
            information on the properties of our minerals, handling
            instructions, and safety measures.
          </p>
          <button className="bg-[#D7051D] py-4 px-10 w-48 rounded-md my-12 text-white">
            View More
          </button>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full flex flex-col md:flex-row gap-10 lg:gap-0 justify-between items-center px-[5%] md:px-[10%] py-[5%]">
        <div className="flex flex-col items-start w-full" data-aos="fade-right">
          <p className="text-[#D7051D] font-bold text-2xl">
            Committed to Excellence
          </p>
          <p className="text-black">
            We are committed to keeping our people healthy and safe
          </p>
        </div>
        <div
          className="flex justify-start md:justify-end w-full md:w-[30%]"
          data-aos="fade-left"
        >
          <button className="bg-[#D7051D] font-bold text-lg md:text-xl text-white p-3 lg:p-5 rounded-md">
            How We work
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
