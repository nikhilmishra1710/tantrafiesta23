"use client";
import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";
import React, { useEffect, useRef } from "react";
import EventCardShort from "./EventCardShort";
import EventCardLong from "./EventCardLong";
import GenAThon from "./GenAThon";
import Overdrive from "./Overdrive";
import Algorithma from "./Algorithma";
import { useInView } from "framer-motion";
import EventCardTall from "./EventCardTall";
import GPT5 from "./GPT5";
import CodeFiesta from "./CodeFiesta";
import RoboRumble from "./RoboRumble";
import Innov from "./Innov";
const EventsGridExtended = () => {
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
    <div ref={divRef} className="flex w-screen lg:w-[75vw]  mt-4 relative">
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
          className=" w-full  grid place-items-center md:place-items-start grid-cols-1 grid-rows-13 md:grid-cols-2 md:grid-rows-10 gap-4"
        >
          <GenAThon />
          <Overdrive />
          <EventCardShort
            organizer="Dimensions"
            title="Blender Blitz"
            details="Step into the mesmerizing world of CG Animation and let your creativity soar! It's a canvas for you to showcase your artistic skills like never before."
            theme={["#90e0ef", "#00b4d8", "#0077b6"]}
            logo="/assets/logo/dimensions_logo.svg"
            textColor="#000000"
            url="/events/blender"
            image="/assets/banner/blender_banner.svg"
          />

          <EventCardShort
            organizer="IoTics"
            title="Byte Craft"
            details="Unlock the future of technology at IOTICS – Byte Craft!  Byte Craft challenges you to integrate hardware and software using the latest advancements in AI and IoT technologies"
            theme={["#AAAAAA", "#FFFFFF", "#555555"]}
            logo="/assets/logo/iotics_logo.svg"
            textColor="#000000"
            url="/events/byte"
            image="/assets/banner/byte_banner.svg"
          />
          <CodeFiesta theme={["#0F971C", "#0F8019", "#0D3A11"]} />
          <RoboRumble theme={["#7b1fa2", "#673ab7", "#f48fb1"]} />

          <EventCardShort
            organizer="Orator"
            title="Reporter's Rendezvous"
            details="Uncover the journalist within you and embark on a journey of discovery in Reporter’s Rendezvous – Journalism Competition! This event is your platform to foster insightful questioning "
            theme={["#ffbe0b", "#fb5607", "#fcbf49"]}
            logo="/assets/logo/orator_logo.svg"
            url="/events/rendezvous"
          />
          <EventCardTall
            organizer="CRISPR"
            title="Enigma Xplore"
            details="Calling all tech geeks and cybersecurity enthusiasts to join EnigmaXplore, a thrilling Jeopardy-styled cybersecurity competition that will put your skills to the test!"
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
            organizer="TF Management"
            title="Shatranj-Up"
            details="Prepare to ignite your strategic genius in The Shatranj-Up – Chess! This event offers a fresh perspective on the classic game of chess."
            theme={["#AAAAAA", "#FFFFFF", "#555555"]}
            logo="/assets/logo/tf_logo.svg"
            textColor="#000000"
            url="/events/chess"
            image="/assets/banner/chess_banner.png"
          />
          <GPT5 theme={["#7b1fa2", "#673ab7", "#f48fb1"]} />

          <EventCardShort
            organizer="TF Management"
            title="Verbum Magisterium"
            details="Sharpen your linguistic skills and embrace the challenge in Verbum Magisterium – Spell Bee Challenge! This school event takes the traditional spelling bee to a whole new level."
            theme={["#ffbe0b", "#fb5607", "#fcbf49"]}
            logo="/assets/logo/tf_logo.svg"
            url="/events/spellbee"
            image="/assets/banner/bee_banner.svg"
          />
          <EventCardTall
            organizer="Dimensions"
            title="Sentient Strife"
            details="This cutting-edge gaming event invites you to design epic boss battles centered around intense emotional conflicts.
"
            banner="/assets/banner/game_jam_banner.svg"
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
            url="/events/sentient"
          />
          <EventCardShort
            organizer="TF Management"
            title="BattleFrenzy"
            details="Gear up for an exhilarating battle like no other in BattleFrenzy – BGMI edition! This turbocharged event invites you to dive into the battlegrounds of BGMI."
            theme={["#FD4556", "#BD3944", "#D62964"]}
            logo="/assets/logo/tf_logo.svg"
            url="/events/battlefrenzy"
            image="/assets/banner/bgmi_banner.svg"
          />
          <Algorithma theme={["#ffbe0b", "#fb5607", "#fcbf49"]} />

          <EventCardTall
            organizer="TF Management"
            title="Treasure Hunt"
            details="Prepare for an adrenaline-fueled adventure like no other in the Treasure Hunt – Thrilling Treasure Hunt! Get ready to embark on a heart-pounding journey filled with mystery and excitement."
            banner="/assets/banner/th_banner.png"
            theme={["#ffbe0b", "#fb5607", "#fcbf49"]}
            url="/events/treasurehunt"
          />
          <EventCardShort
            organizer="Probe"
            title="Open AI"
            details="Delve into the world of artificial intelligence at Probe – Open AI, a captivating event organized by the Probe Club and a highlight of TantraFiesta 2023. "
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
            logo="/assets/logo/probe_logo.svg"
            url="/events/openai"
            image="/assets/banner/openai_banner.svg"
          />
          <EventCardShort
            organizer="Probe"
            title="Photography"
            details="Celebrate the art of photography at Probe – Photography Competition, an event that welcomes enthusiasts and professionals alike to showcase their creative interpretations through the lens. "
            theme={["#90e0ef", "#00b4d8", "#0077b6"]}
            textColor="#000000"
            logo="/assets/logo/probe_logo.svg"
            url="/events/photography"
            image="/assets/banner/photo_banner.png"
          />
          <Innov theme={["#7b1fa2", "#673ab7", "#f48fb1"]} />
          <EventCardShort
            organizer="Probe"
            title="Reel Making"
            details="Embark on a cinematic journey in the Reel Making Competition at Probe! This event invites you to step into the world of filmmaking and capture unforgettable moments from the event. "
            theme={["#FD4556", "#BD3944", "#D62964"]}
            logo="/assets/logo/probe_logo.svg"
            url="/events/reel"
            image="/assets/banner/reel_banner.png"
          />
          <EventCardTall
            organizer="Dimensions"
            title="VR Exhibition"
            details="Dive headfirst into the future of technology at the VR Experience Exhibition! Immerse yourself in a captivating world of virtual reality as you explore an array of cutting-edge VR experiences. "
            banner="/assets/banner/vr_banner.svg"
            theme={["#AAAAAA", "#FFFFFF", "#555555"]}
            textColor="#000000"
            url="/events/vr"
          />
          <EventCardShort
            organizer="TF Management"
            title="Quiz Showdown"
            details="Prepare for a mind-boggling battle of wits in the Quiz Showdown – Quiz Showdown! This event is your ticket to an electrifying competition that will put your knowledge to the test."
            theme={["#ffbe0b", "#fb5607", "#fcbf49"]}
            logo="/assets/logo/tf_logo.svg"
            url="/events/quiz"
            image="/assets/banner/quiz_banner.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsGridExtended;
