"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="sticky top-0 bg-black flex place-content-between place-items-center p-5 z-50">
      <Link href="/">
        <h2 className="font-bold text"> FOOFEST </h2>
      </Link>
      <nav className="bg-black flex items-end">
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
          <motion.button
            aria-label="Menu button"
            initial={false}
            onClick={() => setActive((prev) => !prev)}
            className="relative  h-20 w-20"
            animate={active ? "open" : "closed"}
          >
            <motion.span
              style={{
                left: "50%",
                top: "35%",
                x: "-50%",
                y: "-50%",
              }}
              className="absolute h-0.5 w-10 bg-offwhite"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
            />
            <motion.span
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
              }}
              className="absolute h-0.5 w-10 bg-offwhite"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                },
                closed: {
                  rotate: ["-45deg", "0deg", "0deg"],
                },
              }}
            />
            <motion.span
              style={{
                left: "50%",
                bottom: "35%",
                x: "-50%",
                y: "50%",
              }}
              className="absolute h-0.5 w-10 bg-offwhite"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  bottom: ["35%", "50%", "50%"],
                },
                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  bottom: ["50%", "50%", "35%"],
                },
              }}
            />
          </motion.button>
        </MotionConfig>

        {active && (
          <ul className="flex flex-col items-end absolute top-full left-0 z-100 min-h-screen w-screen p-5 bg-black text-3xl">
            <li>
              <Link href="/" onClick={() => setActive(false)}>
                Home.
              </Link>
            </li>
            <li>
              <Link href="/LineUp" onClick={() => setActive(false)}>
                Schedule.
              </Link>
            </li>
            <li>
              <Link href="/LineUpnew" onClick={() => setActive(false)}>
                Line Up.
              </Link>
            </li>
            <li>
              <Link href="/Tickets" onClick={() => setActive(false)}>
                Tickets.
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
