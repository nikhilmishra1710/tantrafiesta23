"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Robo Rumble";
  const organizer = "IoTics";
  const theme = ["#7b1fa2", "#673ab7", "#f48fb1"];
  const rewards =
    "Rewards And Prizes<br>Winner-20,000<br>Runnner up-10,000<br>Participation Certificate-Prize in kind";
  const data = [
    ["Registration", " 29 September"],
    ["Preliminary Round Starts", "7 September "],
    ["Preliminary Round Ends", "29 September "],
    ["Round 1", "14 October"],
    ["Round 2", "14 October"],
  ];
  const url =
    "https://unstop.com/competitions/robo-rumble-tantrafiesta-23-iiit-nagpur-760991";
  const details =
    "Get ready for a robotic showdown like no other at IOTICS – Robo Rumble! Immerse yourself in the thrilling world of robotics as you experience the high-octane action of Robo Rumble. ";
  const paragraph =
    "Robotic cars will take center stage, navigating challenging obstacles and engaging in an epic Tug of War battle that will leave you on the edge of your seat. Robo Rumble, a highlight of TantraFiesta 2k23 organized by the IoTics Club, offers an exhilarating experience. This captivating spectacle promises attendees an adrenaline-fueled experience as they bear witness to robotic cars surging down the track, masterfully navigating a challenging array of obstacles. Prepare to be astounded as robotic contenders engage in an intense Tug of War, leaving spectators awestruck. Every moment in this electrifying event will resonate with the mechanical symphony of the R-cars.";

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
          <div className=" bg-transparent h-full w-full flex flex-col justify-center">
            <img
              src="/assets/banner/robo_banner.svg"
              height={570}
              width={570}
            />
          </div>
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
