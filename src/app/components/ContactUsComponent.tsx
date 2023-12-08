import Image from "next/image";
import Link from "next/link";
import Navbar from "../sharedComponents/Navbar";

interface ContactUsComponentInterface {}

export default function ContactUsComponent(props: ContactUsComponentInterface) {
  return (
    <div>
      <Navbar />
      <p className="text-black">Contact Us</p>
    </div>
  );
}
