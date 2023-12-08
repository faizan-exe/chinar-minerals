import Image from "next/image";
import Link from "next/link";
import Navbar from "../sharedComponents/Navbar";

interface PricesComponentInterface {}

export default function PricesComponent(props: PricesComponentInterface) {
  return (
    <div>
      <Navbar />
      <p className="text-black">Prices</p>
    </div>
  );
}
