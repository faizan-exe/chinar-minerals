import Image from "next/image";
import Link from "next/link";
import Navbar from "../sharedComponents/Navbar";

interface ServicesComponentInterface {}

export default function ServicesComponent(props: ServicesComponentInterface) {
  return (
    <div>
      <Navbar />
      <p className="text-black">Services</p>
    </div>
  );
}
