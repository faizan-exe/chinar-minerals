import Image from "next/image";
import Link from "next/link";
import "../styles/style.css";
import Navbar from "../sharedComponents/Navbar";
import { AppImages } from "../utils/AppImages";
import Footer from "../sharedComponents/Footer";

interface ProductsComponentInterface {}

export default function ProductsComponent(props: ProductsComponentInterface) {
  return (
    <div>
      <Navbar />
      <div className="relative bg-center w-full h-[calc(70vh)] pt-[10%]">
        <Image src={AppImages.productsBg} alt="Image" layout="fill" />
        {/* <div className="relative w-full h-full bgBlack" /> */}
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
        <Image
          src={AppImages.phosphate2}
          alt="Image"
          className="w-full my-10"
        />
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
        <p className="text-black text-xl font-semibold mb-4 mt-12">
          Heading 3:
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
      <Footer />
    </div>
  );
}
