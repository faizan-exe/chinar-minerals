import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface ProductsComponentInterface {}

export default function ProductsComponent(props: ProductsComponentInterface) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="relative bg-center w-full h-[calc(100vh)] pt-[10%]">
        <Image src={AppImages.productsBg} alt="Image" layout="fill" />
        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0"></div>
      </div>
      <div className="relative mt-[-104px] z-10 flex justify-center lg:px-[8%] xl:px-[15%]">
        <div className="bg-white flex flex-col justify-start items-start w-[80%] h-52 shadow py-6 px-12 rounded-lg">
          <p className="text-[#757474] font-normal text-sm">
            Home {" > "} Products {" > "}
            <span className="text-[#D7051D]">Phosphate</span>
          </p>
          <p className="text-black text-3xl font-bold mt-8 mb-2">PHOSPHATE</p>
          <p className="text-[#757474] text-center text-sm font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 lg:px-[8%] xl:px-[15%] my-16">
        <Image src={AppImages.phosphate1} alt="Image" height={300} />
        <div className="w-0 h-[270px] border-[#D7051D] border-2" />
        <p className="text-black text-2xl">
          We have continued to focus our portfolio on iron ore and
          higher-quality metallurgical coal preferred by our steelmaking
          customers, copper which is used in electrification, nickel which is
          used in electric cars and potash to make food production and land use
          more efficient and more sustainable.
        </p>
      </div>
      <div className="lg:px-[8%] xl:px-[15%] mt-5 my-16">
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
      <div className="relative h-[calc(80vh)]">
        <Image
          src={AppImages.productsHeroBackground}
          alt="Image"
          className="w-full h-full absolute"
        />
        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0"></div>
        <Image
          src={AppImages.crainPNG}
          alt="Image"
          className="absolute right-[-65px] top-[-60px] h-[110%] 2xl:h-[100%] w-auto z-20"
        />
        <div className="absolute flex items-baseline top-0 left-0 mt-14 ml-14">
          <p className="font-bold text-white text-3xl">
            Where is Phosphate used?
          </p>
          <div className="h-[1px] w-[80px] border-2 border-[#D7051D] ml-2" />
        </div>
        {/* <div className="absolute flex h-[50%] z-30 top-40 left-0">
          <div className="h-[100px] w-[100px] flex-col">
            <Image src={AppImages.product1} alt="Image" fill />
            <p className="text-white">Construction</p>
            <p className="text-wjite">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
          </div>
          <div></div>
          <div></div>
        </div> */}
      </div>

      <div className="lg:px-[8%] xl:px-[15%] my-16">
        <p className="text-black text-xl font-semibold mb-4 mt-12">
          Heading 2:
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
      <div className="lg:px-[6%] xl:px-[10%] mb-20 flex">
        <div className="relative w-[50%]">
          <div className="bg-[#f7cdd2] relative 2xl:h-[calc(60vh)] lg:h-[calc(60vh)] w-[calc(40vw)]">
            <Image
              src={AppImages.product2}
              alt="Image"
              className="absolute right-[-30px] bottom-[-30px] 2xl:h-[calc(60vh)] lg:h-[calc(60vh)] w-[calc(40vw)]"
            />
            <div className="absolute bg-black opacity-40 w-full h-full right-[-30px] bottom-[-30px]"></div>
          </div>
          <div className="absolute flex top-[80px] lg:right-2 xl:right-[-27px]">
            <p className="text-white 2xl:text-5xl text-3xl font-semibold">
              Why does
            </p>
          </div>
        </div>
        <div className="w-[50%] mt-[80px] lg:ml-25 xl:ml-[40px]">
          <div>
            <p className="text-black 2xl:text-5xl text-3xl font-semibold mb-2">
              Chinar Mine
            </p>
            <p className="text-[#D7051D] 2xl:text-5xl text-3xl font-semibold">
              Phosphate?
            </p>
          </div>
          <div className="mt-5 ml-10 max-w-[60%]">
            <p className="lg:text-md text-sm text-black xl:leading-snug xl:mt-10">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
            <button className="bg-[#D7051D] py-3 px-5 text-white rounded-md xl:my-10 my-5">
              Get a Qoute
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
