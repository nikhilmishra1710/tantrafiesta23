"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "OpenAI";
  const organizer = " Probe";
  const theme = ["#0F971C", "#0F8019", "#0D3A11"];
  const rewards = "Revealing Soon";
  const data = [["Revealing Soon", ""]];
  const url = "";
  const details =
    "Delve into the world of artificial intelligence at Probe – Open AI, a captivating event organized by the Probe Club and a highlight of TantraFiesta 2023. ";
  const paragraph =
    'This event offers an exciting opportunity to explore the vast realm of AI, discover its potential, and engage with cutting-edge technology. Prepare to embark on an extraordinary artistic odyssey unlike any other! Welcome to the "OpenAI Image - Probe" competition, where participants will fuse their boundless creative ingenuity with the astounding power of AI technology. This unique endeavour invites you to conjure captivating images that breathe life into the enigmatic theme soon to be unveiled. Harnessing the bleeding-edge capabilities of Open AI, you\'ll be granted the ability to transcend traditional artistic boundaries.Prepare to be spellbound as you redefine the very essence of creativity and embark on an enthralling journey into the unknown!';
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
            className="absolute lg:left-20 bottom-0  -z-50 opacity-90"
            src="/assets/banner/openai_banner.svg"
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
