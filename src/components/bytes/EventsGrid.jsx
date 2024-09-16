"use client";
import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";
import React, { useEffect, useRef } from "react";
import EventCardShort from "./EventCardShort";
import CodeFiesta from "./CodeFiesta";
import Overdrive from "./Overdrive";
import Algorithma from "./Algorithma";
import EventCardTall from "./EventCardTall";
import { useInView } from "framer-motion";
import RoboRumble from "./RoboRumble";
const EventsGrid = () => {
  const cardsRef = useRef(null);
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  useEffect(() => {
    // Get cards element reference
    const cards = cardsRef.current;

    // Define mousemove handler function
    const handleOnMove = (e) => {
      // Loop through card elements
      for (const card of cards.children) {
        // Get card element dimensions
        const rect = card.getBoundingClientRect();
        // Get mouse position relative to card element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Set CSS variables for mouse position
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      }
    };
    // Add event listener for mousemove events
    cards.addEventListener("mousemove", handleOnMove);
    // Return a cleanup function that removes event listener
    return () => {
      cards.removeEventListener("mousemove", handleOnMove);
    };
  }, []);

  return (
    <div ref={divRef} className="flex w-screen lg:w-[75vw]  mt-4 relative ">
      <div className="w-[8%] text-3xl flex justify-center relative">
        <div className="flex flex-col  items-center absolute h-full">
          <div className="relative text-green-200">
            <GoBriefcase className="mt-4 mb-8 z-10" />
            <div className="absolute top-0 left-0 -z-10 h-[64px] w-full bg-green-500 blur-[30px]"></div>
          </div>
          <motion.div
            style={{
              background: `linear-gradient( #188ABA 25%, #0D3A11)`,
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
                duration: 3,
                ease: "easeOut",
              },
            }}
            exit={{ height: "0%" }}
            className="w-[3px] h-full rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div className="w-full ">
        <div
          id="eventCards"
          ref={cardsRef}
          className="   w-full  grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4"
        >
          <CodeFiesta theme={["#0F971C", "#0F8019", "#0D3A11"]} />
          <EventCardTall
            organizer="Dimensions"
            title="Sentient Strife"
            details="This cutting-edge gaming event invites you to design epic boss battles centered around intense emotional conflicts.
"
            banner="/assets/banner/game_jam_banner.svg"
            theme={["#ffbe0b", "#fb5607", "#fcbf49"]}
            url="/events/sentient"
          />

          <EventCardShort
            organizer="Dimensions"
            title="Blender Blitz"
            details="Step into the mesmerizing world of CG Animation and let your creativity soar! It's a canvas for you to showcase your artistic skills like never before."
            theme={["#90e0ef", "#00b4d8", "#0077b6"]}
            logo="/assets/logo/dimensions_logo.svg"
            textColor="#000000"
            url="/events/blender"
          />
          <EventCardTall
            organizer="CRISPR"
            title="Enigma Xplore"
            details="Calling all tech geeks and cybersecurity enthusiasts to join EnigmaXplore, a thrilling Jeopardy-style cybersecurity competition that will put your skills to the test!"
            banner="/assets/banner/ctf_banner.svg"
            theme={["#FD4556", "#BD3944", "#D62964"]}
            url="/events/enigma"
            sponsor="/assets/logo/wolfram_logo.svg"
            sponsor_link="https://www.wolfram.com/"
          />
          <EventCardTall
            organizer="Strokes"
            title="Design-A-Thon"
            details="Unleash your creativity and dive into the world of design at Strokes' – Design-A-Thon! This electrifying design hackathon invites you to channel your inner artist and let your imagination run wild."
            banner="/assets/banner/designathon_banner.svg"
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
            url="/events/designathon"
          />

          <EventCardShort
            organizer="IoTics"
            title="Byte Craft"
            details="Unlock the future of technology at IOTICS – ByteCraft!  Byte Craft challenges you to integrate hardware and software using the latest advancements in AI and IoT technologies"
            theme={["#AAAAAA", "#FFFFFF", "#555555"]}
            logo="/assets/logo/iotics_logo.svg"
            textColor="#000000"
            url="/events/byte"
          />
          <RoboRumble theme={["#7b1fa2", "#673ab7", "#f48fb1"]} />
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
