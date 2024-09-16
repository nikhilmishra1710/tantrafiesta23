"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Sentient Strife";
  const organizer = "Dimensions";
  const theme = ["#0F971C", "#0F8019", "#0D3A11"];
  const rewards =
    "Rewards And Prizes<br>Winner-15,000<br>Runner Up-5000<br>Participation Certificates";
  const data = [
    ["Registration", "27 September"],
    ["Round 1", "10 September "],
    ["Round 2", "13 October"],
  ];

  const url =
    "https://unstop.com/competitions/game-jam-event-tantrafiesta-23-iiit-nagpur-761665";
  const details =
    "This cutting-edge gaming event invites you to design epic boss battles centered around intense emotional conflicts.";
  const paragraph =
    " Whether you're challenging AI adversaries or going head-to-head with fellow human racers, Sentiment Strive promises heart-pounding excitement. In this game jam theme, participants are challenged to create boss battles that revolve around the concept of emotional conflict, where the antagonist could be either an advanced AI entity or human characters. The core idea remains the same: players confront an emotionally driven adversary. However, the twist here is that developers have the freedom to decide whether the antagonist is an AI entity with sophisticated emotional responses. Don't miss your chance to experience the ultimate fusion of gaming and emotions in Sentiment Strive!";

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
            src="/assets/banner/game_jam_banner.svg"
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
