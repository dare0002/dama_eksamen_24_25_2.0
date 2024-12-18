"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import { motion } from "motion/react";

const IndexBoxes = () => {
  return (
    <div className="flex">
      <div className="w-1/3 aspect-square border border-offwhite flex flex-col gap-8 place-content-center place-items-center">
        <Image
          src="/ticketimg.svg"
          width={300}
          height={300}
          alt="poster for graphic element for lineup"
        />
        <Link href="/Tickets">
          <motion.div
            className="flex gap-4 place-items-center text-lg"
            whileHover={{ scale: 1.1 }}
          >
            <motion.h3 className="text-2xl font-semibold">TICKETS.</motion.h3>
            <FaArrowRight />
          </motion.div>
        </Link>
      </div>
      <div className="w-1/3 aspect-square border border-offwhite flex flex-col gap-8 place-content-center place-items-center">
        <h3 className="text-2xl font-semibold">JOIN US.</h3>
        <h3 className="text-2xl font-semibold">
          5 JUNE 2025 <br /> COPENHAGEN
        </h3>
        {/* <Link href="/Tickets">
          <motion.button className="border border-offwhite py-2 px-6 w-fit bg-orange/0 transition-colors hover:bg-orange">
            <span className="text-xl font-semibold">TICKETS</span>
          </motion.button>
        </Link> */}
      </div>
      <div className="w-1/3 aspect-square border border-offwhite flex flex-col gap-8 place-content-center place-items-center">
        <Image
          src="/posterimg.svg"
          width={300}
          height={300}
          alt="poster for graphic element for lineup"
        />
        <Link href="/LineUp">
          <motion.div
            className="flex gap-4 place-items-center text-lg"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-2xl font-semibold">LINE UP.</h3>
            <FaArrowRight />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default IndexBoxes;
