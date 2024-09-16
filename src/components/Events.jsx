"use client";
import Tag from "./bytes/Tag";

import { motion } from "framer-motion";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Events = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  return (
    <div id="events" ref={divRef} className="flex lg:w-[75vw] ">
      <div className="w-[8%] text-3xl flex justify-center relative ">
        <div className="flex flex-col  items-center absolute h-full">
          <MdOutlineEmojiEvents className="mb-16 md:mb-4 block lg:hidden" />
          <motion.div
            style={{
              background: `linear-gradient( #0C14CB 10%, #0C14CB 50%,  #188ABA)`,
            }}
            initial={{ height: "0%" }}
            animate={
              isInView
                ? { height: "100%", opacity: [0.4, 1] }
                : { opacity: [0.4, 1] }
            }
            transition={{
              opacity: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              },
              height: {
                duration: 2,
                ease: "easeOut",
              },
            }}
            exit={{ height: "0%" }}
            className="w-[3px] h-full  rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div className="w-full">
        <Tag text="Glimpse TF23" />

        <div className="tracking-wider font-light text-1xl sm:text-2xl mt-8 w-[80%]  mb-16">
          <div className="text-4xl md:text-6xl font-semibold">
            Genesis Unleashed:
          </div>
          <div className="text-4xl mb-4">AI&apos;s Dawn</div>
          <div className="opacity-60">
            where the future meets its genesis! In a world constantly reshaped
            by technological innovation, artificial intelligence stands as the
            catalyst of a new era. As students, researchers, and tech
            enthusiasts, we are on the brink of an era where AI is integral to
            our lives, bridging the gap between science fiction and reality.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
