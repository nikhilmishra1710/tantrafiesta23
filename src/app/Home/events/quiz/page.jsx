"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Quiz Showdown";
  const organizer = "TF Management";
  const theme = ["#ffbe0b", "#fb5607", "#fcbf49"];
  const rewards = "TantraFiesta Goodies";
  const data = [["Revealing Soon", ""]];
  const url = "";
  const details =
    "Prepare for a mind-boggling battle of wits in the Quiz Showdown – Quiz Showdown! This event is your ticket to an electrifying competition that will put your knowledge to the test.";
  const paragraph =
    "Shift into gear for Quiz Rally: Car Edition! Race against time to answer questions, earn points, and prove your automotive knowledge. It's a high-speed battle of wits, where speed and accuracy are your keys to success.Be ready to prove your knowledge prowess in the Quiz Showdown – Quiz Showdown. It's your chance to claim the title of the ultimate quiz champion!";
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
            src="/assets/banner/quiz_banner.svg"
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
