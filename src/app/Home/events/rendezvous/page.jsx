"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Rendezvous";
  const organizer = "Orator";
  const theme = ["#ffbe0b", "#fb5607", "#fcbf49"];
  const rewards =
    "Rewards And Prizes<br>Winner-6,000<br>First Runner Up-4,000<br>Most Confident Journalist-1,000<br>MR/MRS Journalist-1,000<br>Participation Certificate-Prize in kind";
  const data = [
    ["Entry Fee", "₹200"],
    ["Registration", " 06 October"],
    ["Round 1", "14 October "],
    ["Round 2", "14 October"],
  ];

  const url =
    "https://unstop.com/competitions/reporters-rendezvous-journalism-competition-tantrafiesta-23-iiit-nagpur-762024";
  const details =
    "Uncover the journalist within you and embark on a journey of discovery in Reporter’s Rendezvous – Journalism Competition! This event is your platform to foster insightful questioning, delve into the essence of journalism, and hone your reporting skills. ";
  const paragraph =
    'Discover the Essence of Journalism: A Captivating Competition Cultivating, Confident Communication, and Professionalism. This year we are delighted to present "Reporter’s Rendezvous: Ask and Explore", a prestigious Journalism competition which will add more glory to the tech event. What’s more? win exciting prizes and certificates, along with a chance to boast about being the "Most Confident Journalist" and "Mr./Ms. Journalist" for the year 2023. Unveil truths, spark curiosity, and embrace the Journalist within by taking part in this amazing opportunity curated especially for YOU!';

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
            src="/assets/banner/photo_banner.svg"
            height={250}
            width={250}
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
