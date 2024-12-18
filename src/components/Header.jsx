"use client";
import { motion, MotionConfig, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const { scrollY } = useScroll();
  console.log(scrollY.get());
  const yPosition = useTransform(scrollY, [0, 800], ["85vh", "0vh"]); // 500px scroll for hele bevægelsen

  return (
    <motion.header
      style={{ y: yPosition }}
      className="sticky top-0 -translate-y-1/2 bg-black flex place-content-between place-items-center p-5 z-50"
    >
      <Link href="/">
        <h2 className="font-bold text"> FOOFEST </h2>
      </Link>
      <nav className="bg-black flex items-end">
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
          <motion.button
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
              <Link
                href="/"
                onClick={() => setActive(false)} // Lukker menuen, når linket klikkes
              >
                Home.
              </Link>
            </li>
            <li>
              <Link
                href="/LineUp"
                onClick={() => setActive(false)} // Lukker menuen, når linket klikkes
              >
                Line Up.
              </Link>
            </li>
            <li>
              <Link
                href="/Tickets"
                onClick={() => setActive(false)} // Lukker menuen, når linket klikkes
              >
                Tickets.
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
