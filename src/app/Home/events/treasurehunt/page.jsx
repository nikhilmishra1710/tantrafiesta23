"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Treasure Hunt";
  const organizer = "TF Management";
  const theme = ["#ffbe0b", "#fb5607", "#fcbf49"];
  const rewards = "Prize Pool: ₹10,000";
  const data = [
    ["Entry Fee", "₹100 per team"],
    ["Revealing Soon", ""],
  ];
  const url = "https://forms.gle/qpSckC81qhF7fwSR7";
  const details =
    "Prepare for an adrenaline-fueled adventure like no other in the Treasure Hunt – Thrilling Treasure Hunt! ";
  const paragraph =
    " Get ready to embark on a heart-pounding journey filled with mystery and excitement. In this thrilling event, participants will follow a trail of intriguing clues that will lead them to hidden treasures. It's a race against time and wits as you decipher riddles, solve puzzles, and unravel the secrets of the hunt. Prepare for a turbocharged adventure in the Treasure Hunt! Follow the car-themed clues, unlock hidden treasures, and navigate the course like a seasoned racer. Will you be the first to cross the finish line and claim the ultimate prize? It's your chance to prove your mettle and claim the ultimate prize!";
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
            className="absolute bottom-0 -z-50 opacity-90"
            src="/assets/banner/th_banner.png"
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
