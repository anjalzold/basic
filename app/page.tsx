import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
    <Hero/>
    <Feature/>
    <Pricing/>
    <Newsletter/>
   </div>
  );
}
