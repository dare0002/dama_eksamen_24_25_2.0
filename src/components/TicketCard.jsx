import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { motion } from "motion/react";

const TicketCard = ({ ticketImg }) => {
  return (
    <div className="w-full text-center relative">
      <Image
        src={ticketImg}
        width={600}
        height={200}
        alt="poster for graphic element for lineup"
      />
      <button className="absolute px-6 py-3 left-1/2 bottom-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-offwhite/0 hover:bg-offwhite border border-offwhite text-black">
        <span>BUY</span>
      </button>
    </div>
  );
};

export default TicketCard;
