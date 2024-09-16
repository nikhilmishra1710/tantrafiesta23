"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Codefiesta";
  const organizer = "DotSlash ";
  const theme = ["#0F971C", "#0F8019", "#0D3A11"];
  const rewards =
    "Prize Pool: Goodies such as Amazon Alexa and Noise Smartwatches from GFG";
  const data = [["Contest on", "8th October at 9PM to 11PM"]];
  const url = "https://bit.ly/Codefiesta2023";
  const details =
    "Gear up for a coding extravaganza at CodeFiesta! This thrilling competition invites you to showcase your competitive programming skills like never before. Whether you're a coding prodigy or a seasoned programmer, this is your chance to shine.";
  const paragraph =
    "Hey geeks, here we are to take you to the next level of competitive programming. Presenting you the most awaited CodeFiesta 2023, Conducted by DotSlash Club, TantraFiesta 2023. The contest will involve concepts of Algorithmic Skills, Logic Building and Data Structures. So grab the opportunity to participate, showcase your skills, and take up the challenge to compete and win huge cash prizes. Participate in CodeFiesta, hosted on the Geek For Geeks platform, and race against the best programmers from around the world. The rewards go beyond just recognition, with sponsor goodies up for grabs. Be ready to tackle challenging coding problems, demonstrate your problem-solving prowess, and show the coding community what you're made of in CodeFiesta!";

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-black text-white">
      <div className=" w-[80vw] mt-28 flex flex-col items-center">
        <Header
          theme={theme}
          title={title}
          organizer={organizer}
          details={details}
          url={url}
          sponsor="/assets/logo/gfg_logo_extended.svg"
          sponsor_url="https://www.geeksforgeeks.org/"
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],

              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 3,
              },
            }}
            className=" bg-transparent h-full w-full flex flex-col justify-center"
          >
            <img
              src="/assets/banner/cf_banner.svg"
              height={400}
              width={400}
            />
          </motion.div>
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
