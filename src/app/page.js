import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import IndexBoxes from "@/components/IndexBoxes";
import TicketCard from "@/components/TicketCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="">
        <div> <Image></Image></div>
        <IndexBoxes />
        <Banner />
        <FAQ />
        <div>
          <TicketCard />
          <TicketCard />
        </div>
      </main>
    </div>
  );
}
