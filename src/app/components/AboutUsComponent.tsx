import Image from "next/image";
import Link from "next/link";
import Navbar from "../sharedComponents/Navbar";

interface AboutUsComponentInterface {}

export default function AboutUsComponent(props: AboutUsComponentInterface) {
  return (
    <div>
      <Navbar />
      <p className="text-black">About Us</p>
    </div>
  );
}
