"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = " VR Experience exhibition";
  const organizer = "Dimensions";
  const theme = ["#AAAAAA", "#FFFFFF", "#555555"];
  const rewards = "Reveling Soon";
  const data = [["Reveling Soon", ""]];

  const url = "";
  const details =
    "Dive headfirst into the future of technology at the VR Experience Exhibition! Immerse yourself in a captivating world of virtual reality as you explore an array of cutting-edge VR experiences .";
  const paragraph =
    "DIMENSIONS is planning to host a VR experience booth, offering a first-hand experience to viewers and enthusiasts, introducing them to VR experiences through VR games available on SteamVR and scientific VR experiences. From thrilling VR games available on SteamVR to mind-blowing scientific VR experiences, this exhibition is a gateway to a new dimension of entertainment and discovery. Don't miss this opportunity to be at the forefront of the VR revolution! Don't miss this opportunity to be at the forefront of the VR revolution!";

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
          <div className="w-full flex justify-center">
            <img
              className="absolute bottom-0 -z-50 opacity-90"
              src="/assets/banner/vr_banner.svg"
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
