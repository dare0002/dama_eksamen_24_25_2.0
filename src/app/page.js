import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import IndexBoxes from "@/components/IndexBoxes";
import TicketCard from "@/components/TicketCard";
import Button from "@/components/Button";
import HeroIndex from "@/components/HeroIndex";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="relative my-20 flex place-content-center z-1">
          <HeroIndex />
        </div>
        <IndexBoxes />
        <Banner />
        <FAQ />
        <div className="p-4 flex justify-center text-3xl">
          <Link href="/Tickets">
            <Button background={true}>Tickets.</Button>
          </Link>
        </div>
        <div className="flex flex-col place-content-center sm:grid  grid-cols-1 md:grid-cols-2 w-full max-w-3xl mx-auto px-4 py-12 justify-center items-center md:gap-6">
          <TicketCard
            // type="Regular"
            // price="799"
            bgColor="bg-pink"
            // link="/Tickets"
            displayed="block"
            ticketImg="/TickReg.svg"
          />
          <TicketCard
            // type="VIP"
            // price="1299"
            Color="bg-orange"
            // link="/Tickets"
            displayed="block"
            ticketImg="/TickVip.svg"
          />
        </div>
      </main>
    </>
  );
}
