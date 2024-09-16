"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "EnigmaXplore";
  const organizer = "CRISPR";
  const theme = ["#FD4556", "#BD3944", "#D62964"];
  const rewards =
    "Rewards And Prizes<br>Prize Pool-₹20,000<br> Participation Certificates";
  const data = [
    ["Registration", " 01 October"],
    ["Online Round Start", "13 October"],
    ["Online Round Ends", "14 October"],
  ];
  const url =
    "https://unstop.com/hackathons/engimaxplore-ctf-tantrafiesta-23-iiit-nagpur-765077";
  const details =
    "Calling all tech geeks and cybersecurity enthusiasts to join EnigmaXplore, a thrilling Jeopardy-style cybersecurity competition that will put your skills to the test!";
  const paragraph =
    "EnigmaXplore unlike others is a Jeopardy style, cyber security competition. It is an opportunity for Tech geeks to show their skill in various areas of computing and real-life security challenges. It’s a 24-hour online live time event, having challenges from different categories like Reverse Engineering, Binary Exploitation, Forensics, Web Exploitation, cryptography etc. It's not just a competition; it's a chance to showcase your cybersecurity prowess. Don't miss the opportunity to participate in Probe –EnigmaXplore and prove your mettle in the world of cybersecurity!";
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-black text-white">
      <div className=" w-[80vw] mt-28 flex flex-col items-center">
        <Header
          theme={theme}
          title={title}
          organizer={organizer}
          details={details}
          url={url}
          sponsor="/assets/logo/wolfram_logo.svg"
          sponsor_url="https://www.wolfram.com/"
        >
          <div className="w-full flex justify-center">
            <img
              className="absolute bottom-0 -z-50 opacity-90"
              src="/assets/banner/ctf_banner.svg"
              height={450}
              width={450}
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
