"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Overdrive-Valorant Showdown";
  const organizer = "TF Managment";
  const theme = ["#FD4556", "#BD3944", "#D62964"];
  const rewards =
    "Rewards And Prizes<br>Prize Pool-₹15,000<br>Participation Certificate-Prize in kind";
  const data = [
    ["Registration", " 06 October"],
    ["Knockouts start", "07 October "],
    ["Knockouts end", "08 October "],
    ["Semi Finals and Finels", "09 October"],
  ];

  const url =
    "https://unstop.com/competitions/overdrive-valorant-showdown-tantrafiesta-23-iiit-nagpur-760533";
  ("");
  const details =
    "Get ready for an adrenaline-pumping showdown in Overdrive – Valorant Showdown! This event is your ticket to an epic battle in the world of Valorant.";
  const paragraph =
    "Get behind the wheel of your virtual car in Valorant's Raceto Victory event! Join us for the ultimate gaming showdown inspired by high-speed car chases. Show off your skills, strategize like a seasoned driver, and accelerate your way to the top of the leaderboard. Are you ready to burn virtual rubber? It's not just a game; it's the ultimate Valorant experience that will put your skills to the test. make sure you're prepared to join the ranks of Valorant champions in Overdrive – Valorant Showdown!";

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
            className="absolute left-0 bottom-0  -z-50 opacity-90"
            src="/assets/banner/valorant_banner.svg"
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
