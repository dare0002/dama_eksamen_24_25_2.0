"use client";
import { motion, MotionConfig } from "motion/react";

const Item = ({ isOpen, setIsOpen, item, question, answer }) => {
  return (
    <div className="py-4 px-12 border">
      <header className=" flex place-items-center place-content-between">
        <span className="text-offwhite">{question}</span>

        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
          <motion.button
            aria-label="open question button"
            initial={false}
            onClick={() => (isOpen === item ? setIsOpen(0) : setIsOpen(item))}
            className="relative  h-10 w-10 "
            animate={isOpen === item ? "open" : "closed"}
          >
            <motion.span
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
              }}
              className="absolute h-0.5 w-5 bg-offwhite"
              variants={{
                open: {
                  rotate: ["90deg", "0deg", "0deg"],
                },
                closed: {
                  rotate: ["0deg", "0deg", "90deg"],
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
              className="absolute h-0.5 w-5 bg-offwhite"
            />
          </motion.button>
        </MotionConfig>
      </header>
      {isOpen === item && (
        <motion.section
          className="text-sm text-offwhite"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className="pb-3">{answer}</p>
        </motion.section>
      )}
    </div>
  );
};

export default Item;
