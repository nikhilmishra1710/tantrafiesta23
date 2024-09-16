"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = " Gen-A-Thon";
  const organizer = "Elevate";
  const theme = ["#7b1fa2", "#673ab7", "#f48fb1"];
  const rewards =
    "Rewards And Prizes<br>Prize Pool-₹30,000<br>Participation Certificates-Prize in kind";
  const data = [
    ["Registration", " 24 September"],
    ["Round 1", "24 September"],
    ["Round 1 Result", "24 September"],
    ["Round 2 Statement", "24 September"],
    ["Round 2 Submission", "28 September"],
    ["Result", "30 September"],
    ["Grand Final Starts", "13 October"],
    ["Grand Final Ends", "14 October"],
  ];
  const url =
    "https://unstop.com/hackathons/gen-a-thon-tantrafiesta-23-iiit-nagpur-760544";
  const details =
    "Designed to test their tech, creativity and innovation. Join GEN-A-THON to be part of this exhilarating journey into the future of tech.";
  const paragraph =
    "Welcome to the heart-pounding, mind-bending, and creativity-igniting centerpiece of TantraFiesta 2023: GEN-A-THON! Prepare to be immersed in an electrifying 24-hour marathon of innovation, coding, and tech wizardry, where participants will embark on a journey to develop groundbreaking products at the intersection of Artificial Intelligence (AI), Machine Learning (ML), and Web-App Development. Participants will face a unique challenge";

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-black text-white">
      <div className=" w-[80vw] mt-28 flex flex-col items-center">
        <Header
          theme={theme}
          title={title}
          organizer={organizer}
          details={details}
          url={url}
          sponsor="/assets/logo/appx_logo.jpeg"
          sponsor_url="https://www.appxbuild.com/"
          width={200}
        >
          <div className=" bg-transparent absolute left-10 h-full  flex flex-col justify-center">
            <img
              className=" -scale-x-100"
              src="/assets/banner/genathon_banner.svg"
              height={390}
              width={390}
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
