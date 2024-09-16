"use client";
import React, { useRef } from "react";
import EventTimeline from "@/components/eventBytes/EventTimeline";
import Typewriter from "typewriter-effect";
import { motion, useInView } from "framer-motion";
const EventData = ({ paragraph, data, theme, rewards }) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef);

  return (
    <div ref={divRef} className="flex">
      <div className="flex flex-col w-full md:w-3/5  h-min overflow-hidden relative pb-20">
        <div className="z-10">
          <div className="mt-16 text-xl w-full tracking-wider text-left">
            {paragraph}
          </div>

          <EventTimeline data={data} />
          <div className="text-3xl mt-6">Rewards :</div>
          <div className="w-[350px] bg-white/5 text-green-600 font-bold mt-2 p-2 rounded-2xl">
            <Typewriter
              className=" opacity-50"
              options={{
                delay: 30,
                cursor: "|",
                cursorClassName: "intro_cursor",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString(rewards)

                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div className="hidden  w-2/5 md:flex justify-center z-10">
        <motion.div
          style={{
            background: `linear-gradient( ${theme[0]},${theme[2]})`,
          }}
          initial={{ height: "0%" }}
          animate={
            isInView
              ? { height: "100%", opacity: [0.2, 1] }
              : { opacity: [0.4, 1] }
          }
          transition={{
            opacity: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            },
            height: {
              duration: 3,
              ease: "easeOut",
            },
          }}
          exit={{ height: "0%" }}
          className="w-[3px] h-full rounded-xl"
        ></motion.div>
      </div>
    </div>
  );
};

export default EventData;
