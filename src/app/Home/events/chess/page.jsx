"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = " Satranj-Up";
  const organizer = "TF Management";
  const theme = ["#AAAAAA", "#FFFFFF", "#555555"];
  const rewards =
    "Rewards And Prizes<br>Winner-5,000<br>Participation Certificate-Prize in kind";
  const data = [
    ["Entry Fees", "₹30"],
    ["Registration", " 06 October"],
    ["Round 1", "09 October "],
    ["Round 2", "10 October "],
  ];
  const url =
    "https://unstop.com/events/the-shatranj-up-tantrafiesta-23-iiit-nagpur-760540";
  const details =
    "Prepare to ignite your strategic genius in The Shatranj-Up – Chess! This event offers a fresh perspective on the classic game of chess, inviting you to revamp your chessboard and step into the Chess Grand Showdown.";
  const paragraph =
    "Rev up your chessboard and enter the Chess Grand Prix:  Turbo Edition! This high- octane twist on the classic game adds a car-themed strategy. Plan your moves like a seasoned race car driver, accelerate your attacks, and leave your opponents in the dust on the chessboard. Channel your inner grandmaster as you meticulously plan your moves, outwitting your opponents with cunning strategy and flawless execution.The Shatranj-Up – Chess is your opportunity to make your mark on the chessboard of champions!";

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
            className="absolute lg:left-16 bottom-0  -z-50 opacity-90"
            src="/assets/banner/chess_banner.png"
            height={450}
            width={450}
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
