"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Byte Craft";
  const organizer = "IoTics";
  const theme = ["#AAAAAA", "#FFFFFF", "#555555"];
  const rewards =
    "Rewards And Prizes<br>Winner-15,000 + Trophies<br>Runner Up-5,000 + Trophies<br>Participation Certificates";
  const data = [
    ["Registration", " 25 September"],
    ["Online Round", "08 September"],
    ["Offline Round", "13 October"],
  ];

  const url =
    "https://unstop.com/competitions/bytecraft-tantrafiesta-23-iiit-nagpur-761088";
  const details =
    "Unlock the future of technology at IOTICS – ByteCraft!  ByteCraft challenges you to integrate hardware and software using the latest advancements in AI and IoT technologies, pushing the boundaries of innovation.";
  const paragraph =
    "ByteCraft an exciting event organized by Iotics Club under the roof of TantraFiesta. ByteCraft is the platform where the brightest minds converge to showcase their prowess in the dynamic realms of Artificial Intelligence (AI) and the Internet of Things (IoT). Participants are tasked with a captivating challenge to craft a working model that seamlessly integrates cutting-edge hardware and software, all driven by the power of AI and IoT technologies. This event is a testament to the fusion of the digital and physical worlds, where participants breathe life into their ingenious ideas and concepts. ";
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
            className="absolute bottom-0 lg:left-20 -z-50 opacity-90"
            src="/assets/banner/byte_banner.svg"
            height={300}
            width={300}
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
