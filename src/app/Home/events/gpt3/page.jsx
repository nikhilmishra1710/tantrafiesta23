"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "GPT 3.5 Solve-A-Thon";
  const organizer = "CRISPR";
  const theme = ["#7b1fa2", "#673ab7", "#f48fb1"];
  const rewards =
    "Rewards And Prizes<br>Winner-20,000<br>Participation Certificate-Prize in kind";
  const data = [
    ["Registration", " 01 October"],
    ["Round 1 Quiz Starts", "01 October"],
    ["Round 2 Starts", "13 October"],
    ["Round 2 Ends", "14 October"],
    ["Result Annouuncement", "14 October"],
  ];

  const url =
    "https://unstop.com/competitions/gpt-35-solve-a-thon-a-hackathon-using-gen-ai-tantrafiesta-23-iiit-nagpur-761653";
  const details =
    "Prepare to embark on a journey into the future with the GPT 3.5 Solve-A-Thon, a groundbreaking event that harnesses the power of coding and API synergy. ";
  const paragraph =
    "This competition is designed to challenge and inspire participants, consisting of two exciting rounds – an online quiz and a coding round. Step into the future by harnessing the synergy of coding and API at our event! Dive into the world of GPT-3.5 and discover the limitless possibilities of AI models and LLMS. Challenge your skills with a dynamic problem statement engineered to ignite your skills and push the boundaries of AI innovation. The GPT 3.5 Solve-A-Thon offers more than just a chance to showcase your skills; it's an opportunity to make your mark on the future of technology. Don't miss the chance to be part of the future at the GPT 3.5 Solve-A-Thon and unleash your coding and API prowess";
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
          <div className="w-full z-50 flex justify-center">
            <img
              src="/assets/banner/gpt5_banner.png"
              height={230}
              width={230}
            />
          </div>
          <div className="absolute -z-10 top-0 left-0 bg-transparent h-full w-full flex flex-col justify-center items-center mb-5 ">
            <img
              src="/assets/banner/crispr_logo.png"
              height={500}
              width={500}
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
