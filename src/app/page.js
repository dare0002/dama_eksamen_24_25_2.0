import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import IndexBoxes from "@/components/IndexBoxes";
import TicketCard from "@/components/TicketCard";
import Image from "next/image";

export default function Home() {
  return (
  
      <main className="">
        <div className="relative my-20 flex place-content-center z-1">
          <div className="absolute -inset-12 text-center ">
          
          <h1 className=" text-9xl font-bold ">
            REWU
            </h1> 
            <h3 className="text-3xl">7-DAY FESTIVAL</h3>
          </div>
          <Image src="/hero.png"  
        width={800}
        height={500}
        alt="abstract image in orange and pink"/></div>
        <IndexBoxes />
        <Banner />
        <FAQ />
        <div>
          <TicketCard />
          <TicketCard />
        </div>
      </main>
   
  );
}
