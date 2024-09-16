"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
 
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Design-A-Thon";
  const organizer = "Strokes";
  const theme = ["#0F971C", "#0F8019", "#0D3A11"];
  const rewards =
    "Rewards And Prizes<br>Winner-16,000<br>Runnner up-9,000<br>Participation Certificates";
  const data = [
    ["Entry Fee", "Rs.500"],
    ["Registration", " 30 September"],
    ["Submission Round 1 Starts", "01 October"],
    ["Submission Round 1 Ends", "03 October"],
    ["Offline Round", "13 October"],
  ];
  const url =
    "https://unstop.com/competitions/design-a-thon-tantrafiesta-23-iiit-nagpur-761660";
  const details =
    "Unleash your creativity and dive into the world of design at Strokes – Design-A-Thon! This electrifying design hackathon invites you to channel your inner artist and let your imagination run wild.";
  const paragraph =
    "Step into the world of limitless creativity at Design-a-Thon, an electrifying design hackathon presented by the Strokes Club during TantraFiesta 2023. Join us for a day of pure artistic inspiration, where imagination knows no bounds. Get ready to embark on a design journey like never before. Unleash your inner artist, collaborate with fellow visionaries, and let your designs take flight. It's a chance to dive into real-world design challenges, network with industry leaders, and stand a chance to win coveted prizes. Prepare to paint your vision on the canvas of creativity at Strokes – Design-A-Thon!";

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
              src="/assets/banner/designathon_banner.svg"
              height={300}
              width={300}
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
