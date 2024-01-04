import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface AboutUsComponentInterface {}

export default function AboutUsComponent(props: AboutUsComponentInterface) {
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
        <Image src={AppImages.aboutUsBg} alt="Image" layout="fill" />
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
            <span className="text-[#D7051D]">About Us</span>
          </p>
          <p className="text-black text-2xl md:text-3xl font-bold mt-6 mb-4">
            What We Do
          </p>
          <p className="text-[#757474]  text-sm font-normal">
            Our purpose is to bring people and resources together to build a
            better world.
          </p>
        </div>
      </div>

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-6 xl:gap-10 2xl:gap-16 flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] lg:mb-[80px]" data-aos="fade-right">
          <div className="2xl:max-w-[90%] 2xl:mt-5">
            <p className="text-black font-bold text-xl xl:text-2xl">
              ABOUT CHINAR MINERALS
            </p>
            <p className="xl:text-lg lg:text-base text-sm text-black leading-loose mt-3 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-14">
              Chinar Minerals Processing Mills is a B2B manufacturing concern
              that uses cutting edge technology for grinding micro powders,
              fillers derived from Calcium carbonate, Chalk and Talc.
            </p>
            <p className="xl:text-lg lg:text-base text-sm text-black leading-loose mt-3 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-14">
              Committed to achieving customer satisfaction through high quality
              manufacturing products, Chinar Minerals strives to deliver value,
              by responsibly sourcing quality raw materials that meet the unique
              needs of our clients Chinar Minerals offers a range of high
              quality products in Coated Calcium Carbonate, Non Coated Calcium
              Carbonate, Talc or Talcum powder and Chalk. We provide end-to-end
              solutions to our channel-partners and valued clients through our
              customer-centric culture and expertise of our talented workforce.
              High quality products and excellent domestic and international
              customer relationship has earned Chinar Minerals its brand name in
              local and international market.
            </p>
          </div>
        </div>
        <div
          className="relative w-full lg:w-[50%] flex justify-center"
          data-aos="fade-left"
        >
          <div className="bg-[#f7cdd2] relative h-[calc(60vh)] lg:h-[calc(60vh)] xl:h-[calc(70vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]">
            <Image
              src={AppImages.aboutUs1}
              alt="Image"
              className="absolute left-[-30px] bottom-[-30px] h-[calc(60vh)] lg:h-[calc(60vh)] xl:h-[calc(70vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]"
            />
            <div className="absolute bg-black opacity-40 w-full h-full left-[-30px] bottom-[-30px]"></div>
          </div>
        </div>
      </div>

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-10 xl:gap-14 flex-col lg:flex-row">
        <div
          className="w-full lg:w-[50%] shadow rounded-md p-10"
          data-aos="fade-right"
        >
          <p className="text-black font-bold text-xl text-center">
            OUR HISTORY
          </p>
          <p className="lg:text-base text-sm text-black leading-loose mt-10 text-center">
            Col® Sadiq Sultan founder and Chairman of the company with a vision
            of high quality minerals processing, laid the foundation of the firm
            in 2011.Headquartered in Hattar Industrial Estate, Pakistan Chinar
            Minerals processed Calcium Carbonate, gradually growing its product
            line to meet the demand from existing customers.The firm established
            its first regional office and warehouse in Karachi, the industrial
            hub of Pakistan, to serve its large number of customers in the
            south. Chinar Minerals subsequently expanded in domestic market and
            now operate through its offices and warehouses in Lahore, Karachi
            and Islamabad.
          </p>
        </div>
        <div
          className="w-full lg:w-[50%] shadow rounded-md p-10"
          data-aos="fade-left"
        >
          <p className="text-black font-bold text-xl text-center">
            OUR EXPERIENCES
          </p>
          <p className="lg:text-base text-sm text-black leading-loose mt-10 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem the leap into electronic
            typesetting, remaining essentially
          </p>
        </div>
      </div>

      <div className="relative bg-center w-full h-[calc(140vh)] md:h-[calc(100vh)] lg:h-[calc(70vh)] bg-red-600 2xl:h-[calc(70vh)] py-10">
        <Image
          src={AppImages.aboutUs2}
          alt="Image"
          fill
          className="hidden md:block"
        />
        <Image
          src={AppImages.aboutUs2Mob}
          alt="Image"
          fill
          className="block md:hidden"
        />
        <div className="absolute bg-black opacity-50 w-full h-full top-0"></div>
        <div className="absolute h-full w-full xl:px-36 lg:px-24 px-8 pt-5">
          <div data-aos="fade-right">
            <div className="flex items-baseline">
              <p
                className="text-[#D7051D] font-bold text-2xl lg:text-3xl xl:text-5xl my-[1%]"
                data-aos="fade-right"
              >
                Our Charter
              </p>
              <div className="h-[1px] w-[80px] border-2 border-[#D7051D] ml-2" />
            </div>
            <p className="font-semibold text-white text-lg md:text-xl">
              Our Charter is central to everything we do. We’re successful when;
            </p>
          </div>

          <div
            className="flex flex-col lg:flex-row gap-14 lg:gap-6 xl:gap-10 justify-center lg:justify-start mt-16 lg:mt-20 2xl:mt-28"
            data-aos="fade-up"
          >
            <div className="bgBlack relative flex flex-col items-start lg:w-[33%] lg:px-8 2xl:px-5 p-5 py-10 2xl:py-20 rounded-lg">
              <div className="bg-[#D7051D] flex items-center justify-center h-14 w-16 absolute top-[-30px] left-8 rounded-lg">
                <Image
                  src={AppImages.sustIconWhite}
                  alt="Icon"
                  height={40}
                  width={40}
                />
              </div>
              <p className="text-white text-xl font-bold mb-5">
                Sustainability
              </p>
              <p className="text-white text-sm">
                Putting health and safety first, being environmentally
                responsible and supporting our communities.
              </p>
            </div>

            <div className="bgBlack relative flex flex-col items-start lg:w-[33%] lg:px-8 2xl:px-5 p-5 py-10 2xl:py-20 rounded-lg">
              <div className="bg-[#D7051D] flex items-center justify-center h-14 w-16 absolute top-[-30px] left-8 rounded-lg">
                <Image
                  src={AppImages.performanceIcon}
                  alt="Icon"
                  height={40}
                  width={40}
                />
              </div>
              <p className="text-white text-xl font-bold mb-5">Performance</p>
              <p className="text-white text-sm">
                Achieving superior business results by stretching our
                capabilities.
              </p>
            </div>

            <div className="bgBlack relative flex flex-col items-start lg:w-[33%] lg:px-8 2xl:px-5 p-5 py-10 2xl:py-20 rounded-lg">
              <div className="bg-[#D7051D] flex items-center justify-center h-14 w-16 absolute top-[-30px] left-8 rounded-lg">
                <Image
                  src={AppImages.analysisIcon}
                  alt="Icon"
                  height={40}
                  width={40}
                />
              </div>
              <p className="text-white text-xl font-bold mb-5">Respect</p>
              <p className="text-white text-sm">
                Embracing openness, trust, teamwork, diversity and relationships
                that are mutually beneficial.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-10 lg:gap-0 flex-col lg:flex-row">
        <div
          className="relative w-full lg:w-[60%] flex justify-center"
          data-aos="fade-right"
        >
          <div className="bg-[#f7cdd2] relative h-[calc(60vh)] lg:h-[calc(60vh)] w-[calc(75vw)] lg:w-[calc(40vw)]">
            <Image
              src={AppImages.aboutUs3}
              alt="Image"
              className="absolute right-[-30px] bottom-[-30px] h-[calc(60vh)] w-[calc(75vw)] lg:w-[calc(40vw)]"
            />
            <div className="absolute bg-black opacity-40 w-full h-full right-[-30px] bottom-[-30px]"></div>
          </div>
        </div>
        <div
          className="w-full lg:w-[40%] flex items-center"
          data-aos="fade-left"
        >
          <div className="w-full h-full lg:h-[90%] xl:h-[80%] flex flex-col justify-center shadow rounded-md p-10">
            <p className="text-black font-bold text-2xl">
              Why our work matters
            </p>
            <p className="lg:text-base text-sm text-[#5c5c5c] font-bold leading-loose mt-5 2xl:mt-10">
              The raw materials we responsibly produce are fundamental to how we
              live now, and many will be in the future too.
            </p>
            <p className="lg:text-base text-sm text-black leading-loose mt-5 2xl:mt-10">
              <span className="font-semibold">Sustaining Modern Life: </span>Our
              minerals are essential in various industries, supporting global
              infrastructure and advancement.
            </p>
            <p className="lg:text-base text-sm text-black leading-loose mt-5 2xl:mt-10">
              <span className="font-semibold">Driving Innovation: </span>We
              provide materials crucial for technological progress, helping
              shape a sustainable and advanced future.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-10 flex-col lg:flex-row py-[10%] lg:py-[5%]">
        <div className="w-full lg:w-[60%]" data-aos="fade-right">
          <p className="text-[#D7051D] font-bold text-lg">
            CHINAR MINERALS at a glance
          </p>
          <p className="text-black lg:text-base text-sm leading-loose my-10">
            Chinar Minerals is a prominent B2B manufacturer specializing in the
            extraction, processing, and distribution of essential minerals like
            Calcium Carbonate, Chalk, and Talc. Established in 2011 and rooted
            in Hattar Industrial Estate, Pakistan, our company has swiftly
            expanded its operations to meet global demands. With a commitment to
            innovation, quality, and sustainability, we utilize cutting-edge
            technology to produce micro powders and fillers that are integral to
            various industries. Our range of high-quality products, including
            Coated and Non-Coated Calcium Carbonate, Talcum Powder, and Chalk,
            is complemented by our tailored and a customer-centric approach.
          </p>
          <button className="bg-[#D7051D] font-bold text-lg md:text-xl text-white p-3 lg:p-5 rounded-lg">
            How We work
          </button>
        </div>
        <div
          className="w-full lg:w-[40%] shadow bg-white rounded-lg flex flex-col justify-evenly px-2"
          data-aos="fade-left"
        >
          <div className="flex flex-col items-center py-5 border-b border-[#D7051D]">
            <p className="text-black text-3xl font-bold">2011</p>
            <p className="text-black text-sm">
              Chinar minerals was founded in 2011.
            </p>
          </div>
          <div className="flex flex-col items-center py-5 border-b border-[#D7051D]">
            <p className="text-black text-3xl font-bold">30,000</p>
            <p className="text-black text-sm">
              Around 30,000 employees at Chinar Minerals.
            </p>
          </div>
          <div className="flex flex-col items-center py-5">
            <p className="text-black text-3xl font-bold">7+</p>
            <p className="text-black text-sm">
              We work over 7 locations nation-wide.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[5%] lg:px-[6%] xl:px-[10%] my-20 flex gap-14 lg:gap-10 2xl:gap-16 flex-col lg:flex-row">
        <div
          className="relative w-full lg:w-[50%] flex justify-center"
          data-aos="fade-right"
        >
          <div className="bg-[#f7cdd2] relative h-[calc(50vh)] lg:h-[calc(60vh)] xl:h-[calc(70vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]">
            <Image
              src={AppImages.ceoImage}
              alt="Image"
              className="absolute right-[-30px] bottom-[-30px] h-[calc(50vh)] lg:h-[calc(60vh)] xl:h-[calc(70vh)] w-[calc(75vw)] lg:w-[calc(40vw)] xl:w-[calc(35vw)] 2xl:w-[calc(45vw)]"
            />
            <div className="absolute bg-black opacity-40 w-full h-full right-[-30px] bottom-[-30px]"></div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] lg:mb-[80px]" data-aos="fade-left">
          <div className="lg:mt-5 2xl:mt-10">
            <p className="text-[#D7051D] font-bold text-2xl xl:text-3xl 2xl:text-4xl">
              LIAQAT ALI SULTAN
            </p>
            <p className="text-black text-lg xl:text-xl 2xl:text-2xl mt-5">
              COMPANY CEO
            </p>
            <p className="xl:max-w-[80%] 2xl:text-lg lg:text-base text-sm text-black leading-loose mt-3 md:mt-5 lg:mt-8">
              As the CEO of Chinar Minerals, I extend my heartfelt greetings to
              each of you. Since our establishment in 2011, Chinar Minerals has
              been driven by a vision to excel in the mineral processing
              industry by providing high-quality, innovative, and sustainable
              solutions. Our journey has been one of continuous growth and
              learning, and today, I am proud to say that we stand as a
              testament to what dedication, teamwork, and commitment to
              excellence can achieve.
            </p>
            <button className="bg-[#D7051D] text-lg md:text-xl text-white p-3 lg:p-5 rounded-lg my-5 xl:my-8 2xl:my-5">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
