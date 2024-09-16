"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = " Reel Making";
  const organizer = "Probe";
  const theme = ["#FD4556", "#BD3944", "#D62964"];
  const rewards = "Prize Pool: ₹5000";
  const data = [["Revealing Soon", ""]];
  const url = "";
  const details =
    "Embark on a cinematic journey in the Reel Making Competition at Probe! This event invites you to step into the world of filmmaking and capture unforgettable moments from the event. ";
  const paragraph =
    "Showcase Your Cinematic Masterpiece. Enter the realm of filmmaking, where creativity reign supreme and let your inner storyteller take center stage in our Reel Making Competition! This is your golden opportunity to make your mark in the world of Filmmaking. In this competition, your mission is to create a cinematic reel that masterfully captures the most unforgettable moments, emotions and experiences from the inaugural day of this extraordinary event. Seize this chance to seamlessly fuse your storytelling prowess with the enchanting essence of Tantra Fiesta.";

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
            src="/assets/banner/reel_banner.png"
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
