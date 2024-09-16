"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Photography";
  const organizer = "Probe";
  const theme = ["#90e0ef", "#00b4d8", "#0077b6"];
  const rewards = "Prize Pool: ₹5000";
  const data = [["Revealing Soon", ""]];
  const url = "";
  const details =
    "Celebrate the art of photography at Probe – Photography Competition, an event that welcomes enthusiasts and professionals alike to showcase their creative interpretations through the lens";
  const paragraph =
    " This competition is a tribute to the diverse perspectives and visions captured by photographers. It's an exploration of the uncharted, a celebration of the overlooked, and a revelation of the extraordinary hidden within the ordinary. The competition aims to celebrate the diversity of interpretations that this theme can inspire. Whether you're an amateur enthusiast or a seasoned professional, your photographic skills can come to life in this virtual contest. It's your chance to make your visual storytelling stand out! ";

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
            src="/assets/banner/photo_banner.png"
            height={320}
            width={320}
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
