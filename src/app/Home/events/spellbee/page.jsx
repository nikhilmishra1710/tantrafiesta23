"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Spell Bee ";
  const organizer = "TF Management";
  const theme = ["#ffbe0b", "#fb5607", "#fcbf49"];
  const rewards = "Rewards And Prizes<br>Winner-7,000<br>Runnner up-3,000";
  const data = [
    ["Registration", " 05 October"],
    ["Offline Round", "14 October "],
  ];
  const url =
    "https://unstop.com/competitions/verbum-magisterium-the-battle-of-spells-tantrafiesta-23-iiit-nagpur-761664";
  const details =
    "Sharpen your linguistic skills and embrace the challenge in Verbum Magisterium – Spell Bee Challenge! ";
  const paragraph =
    "This school event takes the traditional spelling bee to a whole new level, infusing it with an exciting twist that will put your spelling prowess to the test. Put the pedal to the metal in the Spell Bee Drag Race! This school event combines spelling prowess with the excitement of drag racing. Spell your way to victory, leaving your competitors trailing in your tire tracks.It's your chance to shine and prove that you're the ultimate wordsmith!";
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-black text-white">
      <div className=" w-[80vw] mt-28 flex flex-col items-center">
        <Header
          theme={theme}
          title={title}
          organizer={organizer}
          details={details}
          url={url}
        >
          <img
            className="absolute -scale-x-100 left-0 bottom-0  -z-50 opacity-90"
            src="/assets/banner/bee_banner.svg"
            height={400}
            width={400}
          />
        </Header>
        <EventData
          paragraph={paragraph}
          data={data}
          theme={theme}
          rewards={rewards}
        />

        <Contact />
      </div>
    </div>
  );
};

export default page;
