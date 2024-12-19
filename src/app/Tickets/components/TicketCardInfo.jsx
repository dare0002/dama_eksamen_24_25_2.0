import TicketCard from "./TicketCard";
import Button from "@/components/Button";
import Link from "next/link";

const TicketCardInfo = () => {
  return (
    <div className="max-w-xl mx-auto md:max-w-3xl md:mx-auto px-6 md:px-4 md:py-4 md:space-y-6">
        <div className="flex items-center justify-between mb-10">
            <p className="text-offwhite md:text-xl">Passes</p>
            <Link href="/Booking">
            <Button background={true}>BUY TICKETS HERE.</Button>
            </Link>
        </div>
      <div className="md:grid md:grid-cols-3 mb-10">
        <div className="md:col-span-1 md:flex">
          <TicketCard
            ticketImg="/TickReg.svg"
            type="Regular"
            displayed="hidden"
            price="799"
            bgColor="bg-pink"
            link=""
          />
        </div>

        <div className="bg-offwhite text-black p-10 md:col-span-2 md:flex md:flex-col md:p-10">
          <h3 className="md:text-2xl">Regular-Ticket</h3>
          <p>
            {" "}
            This festival ticket is perfect for festival-goers who want to
            experience the full festival vibe at an affordable price, with
            access to all standard areas and activities.
          </p>
          <h4 className="pt-4 md:pt-4">What´s included:</h4>
          <ul className="list-disc space-y-2 md:pl-6 md:space-y-2">
            <li>
              Access to the main festival area throughout all festival days.
            </li>
            <li>
              Entry to concerts, performances, and other festival activities in
              standard sections.
            </li>
            <li>
              Free access to food and beverage areas (purchases required for
              consumption).
            </li>
            <li>
              Use of general facilities, such as restrooms and seating in
              standard zones.
            </li>
          </ul>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex h-full">
          <TicketCard
            displayed="hidden"
            ticketImg="/TickVip.svg"
              type="VIP" price="1299" bgColor="bg-orange" link=""
          />
        </div>
        <div className="bg-offwhite text-black p-10 md:col-span-2 md:flex md:flex-col md:p-10">
          <h3 className="md:text-2xl">VIP-Ticket</h3>
          <p>
            The VIP ticket provides an exclusive festival experience, designed
            for those who want to enjoy the festival in luxury and comfort. With
            access to premium areas, priority entry to events, and additional
            perks, the VIP ticket offers a truly elevated experience.
          </p>
          <h4 className="pt-4 md:pt-4">What´s included:</h4>
          <ul className="list-disc space-y-2 md:pl-6 md:space-y-2">
            <li>
              VIP access to exclusive festival areas, including VIP lounges and
              premium seating.
            </li>
            <li>
              Priority entry to concerts, performances, and other special
              events.
            </li>
            <li>Complimentary food and beverages in VIP sections.</li>
            <li>Dedicated VIP restrooms and premium facilities.</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 ">
        <p className="text-sm md:text-lg">NB if you buy a ticket you must prebook a camping spot.</p>
         <p className="text-xs md:text-base mt-2">You can prebook a camping spot in the checkout section</p>
      </div>
    </div>
  );
};

export default TicketCardInfo;
