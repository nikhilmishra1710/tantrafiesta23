"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "BattleFrenzy ";
  const organizer = "TF Management";
  const theme = ["#FD4556", "#BD3944", "#D62964"];
  const rewards = "Rewards And Prizes<br>Winner-5,000";
  const data = [
    ["Entry Fee", "₹100"],
    ["Registration", " 05 October"],
    ["Knockouts", "08 October "],
  ];

  const url =
    "https://unstop.com/competitions/battlefrenzy-bgmi-tantrafiesta-23-iiit-nagpur-760522";
  const details =
    "Gear up for an exhilarating battle like no other in BattleFrenzy – BGMI edition! This turbocharged event invites you to dive into the battlegrounds of BGMI, where teamwork, strategy, and lightning-fast reflexes are your ultimate weapons.";
  const paragraph =
    "Drop into the battlegrounds of BGMI, but this time, it's a race on wheels! This gaming event combines the thrill of battle royale with the speed of car racing. Form squads, outmaneuver opponents and prove you're not just a gaming champ but also aracing prodigy. Prepare to embark on an epic gaming journey in BattleFrenzy – BGMI. It's time to show the world your skills in the heat of battle! ";

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
            src="/assets/banner/bgmi_banner.svg"
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
