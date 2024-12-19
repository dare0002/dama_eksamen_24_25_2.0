import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const TicketCard = ({ ticketImg, Color, displayed }) => {
  return (
    <div className=" text-center relative flex place-content-center">
      <Image
        src={ticketImg}
        width={600}
        height={200}
        alt="poster for graphic element for lineup"
        className="md:w-3/4"
      />
      <Link href="/Tickets">
        <button
          className={`absolute px-6 py-3 ${displayed} left-1/2 bottom-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-${Color}/40 hover:bg-offwhite border border-offwhite text-black`}
        >
          <span>BUY</span>
        </button>
      </Link>
    </div>
  );
};

export default TicketCard;
